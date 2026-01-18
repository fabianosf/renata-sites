#!/bin/bash

# Script para corrigir configuração SSL/HTTPS
# Servidor: 92.113.33.16 (Hostinger)

set -e

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configurações
SERVER_IP="92.113.33.16"
SERVER_USER="fabianosf"
SERVER_PASSWORD="123"
DOMAIN="clinicarenatabastos.com.br"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Corrigindo Configuração SSL/HTTPS${NC}"
echo -e "${GREEN}========================================${NC}"

# Função SSH
ssh_exec() {
    sshpass -p "$1" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$2@$SERVER_IP" "$3"
}

# Verificar certificado e configurar
echo -e "\n${GREEN}[1/3] Verificando certificado SSL...${NC}"

ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    echo '$SERVER_PASSWORD' | sudo -S bash -c '
        # Verificar se certificado existe
        if [ -f \"/etc/letsencrypt/live/$DOMAIN/fullchain.pem\" ]; then
            echo \"Certificado encontrado!\"
            ls -la /etc/letsencrypt/live/$DOMAIN/
        else
            echo \"Certificado não encontrado. Obtendo novo certificado...\"
            # Obter certificado
            timeout 180 certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --register-unsafely-without-email --redirect 2>&1 || {
                echo \"Erro ao obter certificado. Tentando novamente...\"
                # Tentar obter sem redirect primeiro
                timeout 180 certbot certonly --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --register-unsafely-without-email 2>&1
            }
        fi
    '
"

echo -e "\n${GREEN}[2/3] Configurando Nginx com certificado SSL...${NC}"

# Criar configuração correta do Nginx com certificado
NGINX_CONFIG="
# Redirecionar HTTP para HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Permite validação do Let's Encrypt
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # Redireciona tudo mais para HTTPS
    location / {
        return 301 https://\$host\$request_uri;
    }
}

# Configuração HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    root /home/fabianosf/public_html;
    index index.html index.htm;

    # Logs
    access_log /var/log/nginx/${DOMAIN}_access.log;
    error_log /var/log/nginx/${DOMAIN}_error.log;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Headers de segurança
    add_header X-Frame-Options \"DENY\" always;
    add_header X-Content-Type-Options \"nosniff\" always;
    add_header X-XSS-Protection \"1; mode=block\" always;
    add_header Referrer-Policy \"strict-origin-when-cross-origin\" always;
    add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\" always;
    add_header Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://wa.me https://formsubmit.co; frame-src 'self' https://www.google.com;\" always;

    # Configuração para SPA (Single Page Application)
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control \"public, immutable\";
    }

    # Bloquear acesso a arquivos sensíveis
    location ~ /\. {
        deny all;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
}
"

# Salvar e enviar configuração
echo "$NGINX_CONFIG" > /tmp/nginx_ssl_config
sshpass -p "$SERVER_PASSWORD" scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null /tmp/nginx_ssl_config "$SERVER_USER@$SERVER_IP:/tmp/nginx_ssl_config"

# Aplicar configuração
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    echo '$SERVER_PASSWORD' | sudo -S bash -c '
        cp /tmp/nginx_ssl_config /etc/nginx/sites-available/$DOMAIN
        chmod 644 /etc/nginx/sites-available/$DOMAIN
        
        # Criar symlink se não existir
        if [ ! -L /etc/nginx/sites-enabled/$DOMAIN ]; then
            rm -f /etc/nginx/sites-enabled/$DOMAIN
            ln -s /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/$DOMAIN
        fi
        
        # Testar configuração
        if nginx -t; then
            echo \"Configuração válida!\"
            systemctl reload nginx || service nginx reload
            echo \"Nginx recarregado com sucesso!\"
        else
            echo \"ERRO na configuração do Nginx!\"
            nginx -t
            exit 1
        fi
    '
"

rm -f /tmp/nginx_ssl_config

echo -e "\n${GREEN}[3/3] Verificando SSL...${NC}"
sleep 3

# Verificar HTTPS
HTTPS_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "https://$DOMAIN" 2>/dev/null || echo "000")

if [[ "$HTTPS_CODE" =~ ^(200|301|302)$ ]]; then
    echo -e "${GREEN}✓ HTTPS funcionando corretamente!${NC}"
    echo -e "${GREEN}✓ Site disponível em: https://$DOMAIN${NC}"
else
    echo -e "${YELLOW}⚠ Verifique manualmente: https://$DOMAIN${NC}"
    echo -e "${YELLOW}   Pode levar alguns minutos para o certificado ser reconhecido.${NC}"
fi

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}  Correção Concluída!${NC}"
echo -e "${GREEN}========================================${NC}"

