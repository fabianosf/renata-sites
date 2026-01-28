#!/bin/bash

# Script de Deploy Automático para o Site da Clínica Renata Bastos
# Servidor: 92.113.33.16 (Hostinger)
# Usuários: fabianosf e root

set -e  # Para o script se houver erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configurações do servidor
SERVER_IP="92.113.33.16"
SERVER_USER="fabianosf"
ROOT_USER="root"
SERVER_PASSWORD="123"
ROOT_PASSWORD="123"
DOMAIN="clinicarenatabastos.com.br"
WEB_DIR="/var/www/clinicarenatabastos.com.br"
NGINX_CONFIG_DIR="/etc/nginx/sites-available"
NGINX_ENABLED_DIR="/etc/nginx/sites-enabled"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Deploy Automático - Clínica Renata Bastos${NC}"
echo -e "${GREEN}========================================${NC}"

# Função para executar comandos SSH
ssh_exec() {
    sshpass -p "$1" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$2@$SERVER_IP" "$3"
}

# Função para copiar arquivos via SCP
scp_copy() {
    sshpass -p "$1" scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -r "$2" "$3@$SERVER_IP:$4"
}

# Verificar se sshpass está instalado
if ! command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}Instalando sshpass...${NC}"
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update && sudo apt-get install -y sshpass
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew install hudochenkov/sshpass/sshpass || echo -e "${RED}Por favor, instale sshpass manualmente: brew install hudochenkov/sshpass/sshpass${NC}"
    fi
fi

# 1. Fazer build do projeto
echo -e "\n${GREEN}[1/9] Fazendo build do projeto...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Erro: Diretório dist não foi criado!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build concluído com sucesso!${NC}"

# 2. Testar conexão SSH
echo -e "\n${GREEN}[2/9] Testando conexão SSH...${NC}"
if ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "echo 'Conexão OK'"; then
    echo -e "${GREEN}✓ Conexão SSH estabelecida!${NC}"
else
    echo -e "${RED}Erro: Não foi possível conectar ao servidor!${NC}"
    exit 1
fi

# 3. Criar estrutura de diretórios no servidor
echo -e "\n${GREEN}[3/9] Criando estrutura de diretórios no servidor...${NC}"
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    mkdir -p $WEB_DIR
    mkdir -p $WEB_DIR/backup
    chmod -R 755 $WEB_DIR
"

echo -e "${GREEN}✓ Estrutura de diretórios criada!${NC}"

# 4. Fazer backup da versão anterior (se existir)
echo -e "\n${GREEN}[4/9] Fazendo backup da versão anterior...${NC}"
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    if [ -d \"$WEB_DIR\" ] && [ \"\$(ls -A $WEB_DIR)\" ]; then
        BACKUP_DIR=\"$WEB_DIR/backup/backup_\$(date +%Y%m%d_%H%M%S)\"
        mkdir -p \"\$BACKUP_DIR\"
        cp -r $WEB_DIR/* \"\$BACKUP_DIR/\" 2>/dev/null || true
        echo \"Backup criado em \$BACKUP_DIR\"
    fi
"

echo -e "${GREEN}✓ Backup concluído!${NC}"

# 5. Limpar diretório web e fazer upload dos novos arquivos
echo -e "\n${GREEN}[5/9] Fazendo upload dos arquivos...${NC}"
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "rm -rf $WEB_DIR/*"

# Criar arquivo tar para upload mais eficiente
echo -e "${YELLOW}Empacotando arquivos...${NC}"
(cd dist && tar -czf /tmp/site_deploy.tar.gz .)

# Verificar se o arquivo foi criado
if [ ! -f "/tmp/site_deploy.tar.gz" ]; then
    echo -e "${RED}Erro: Falha ao criar arquivo compactado!${NC}"
    exit 1
fi

# Enviar arquivo compactado
scp_copy "$SERVER_PASSWORD" "/tmp/site_deploy.tar.gz" "$SERVER_USER" "/tmp/site_deploy.tar.gz"

# Extrair no servidor e limpar
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    cd $WEB_DIR
    tar -xzf /tmp/site_deploy.tar.gz
    rm -f /tmp/site_deploy.tar.gz
    chmod -R 755 $WEB_DIR
    find $WEB_DIR -type f -exec chmod 644 {} \;
    find $WEB_DIR -type d -exec chmod 755 {} \;
"

# Limpar arquivo temporário local
rm -f /tmp/site_deploy.tar.gz

echo -e "${GREEN}✓ Upload concluído!${NC}"

# 6. Instalar Certbot (se necessário)
echo -e "\n${GREEN}[6/9] Verificando/Instalando Certbot para SSL...${NC}"
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    echo '$SERVER_PASSWORD' | sudo -S bash -c '
        # Criar diretório para validação do Let'\''s Encrypt
        mkdir -p /var/www/html
        chmod -R 755 /var/www/html
        
        if ! command -v certbot &> /dev/null; then
            echo \"Instalando certbot...\"
            if command -v apt-get &> /dev/null; then
                apt-get update
                apt-get install -y certbot python3-certbot-nginx
            elif command -v yum &> /dev/null; then
                yum install -y certbot python3-certbot-nginx
            else
                echo \"Sistema não suportado para instalação automática do certbot\"
            fi
        else
            echo \"Certbot já está instalado\"
        fi
    '
"
echo -e "${GREEN}✓ Certbot verificado/instalado!${NC}"

# 7. Configurar Nginx com HTTP e HTTPS
echo -e "\n${GREEN}[7/9] Configurando Nginx (HTTP e HTTPS)...${NC}"

# Criar configuração do Nginx com HTTP e HTTPS
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
    
    root $WEB_DIR;
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

# Salvar configuração localmente temporariamente
echo "$NGINX_CONFIG" > /tmp/nginx_config_${DOMAIN}

# Enviar configuração para o servidor
scp_copy "$SERVER_PASSWORD" "/tmp/nginx_config_${DOMAIN}" "$SERVER_USER" "/tmp/nginx_config_${DOMAIN}"

# Copiar para o diretório de configuração do nginx usando sudo
echo -e "${YELLOW}Configurando Nginx...${NC}"
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    echo '$SERVER_PASSWORD' | sudo -S bash -c '
        # Copiar configuração
        cp /tmp/nginx_config_${DOMAIN} $NGINX_CONFIG_DIR/$DOMAIN
        chmod 644 $NGINX_CONFIG_DIR/$DOMAIN
        
        # Criar symlink se não existir
        if [ ! -L $NGINX_ENABLED_DIR/$DOMAIN ]; then
            ln -s $NGINX_CONFIG_DIR/$DOMAIN $NGINX_ENABLED_DIR/$DOMAIN
        fi
        
        # Testar configuração do nginx
        if nginx -t; then
            echo \"Configuração do Nginx válida!\"
        else
            echo \"ERRO: Configuração do Nginx inválida!\"
            exit 1
        fi
        
        # Recarregar nginx
        systemctl reload nginx || service nginx reload
        echo \"Nginx recarregado com sucesso!\"
    '
"

# Limpar arquivo temporário
rm -f /tmp/nginx_config_${DOMAIN}
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "rm -f /tmp/nginx_config_${DOMAIN}"

echo -e "${GREEN}✓ Nginx configurado!${NC}"

# 8. Obter certificado SSL e configurar HTTPS
echo -e "\n${GREEN}[8/9] Obtendo certificado SSL do Let's Encrypt...${NC}"
echo -e "${YELLOW}Aguardando Nginx estar ativo antes de obter certificado...${NC}"

# Recarregar nginx primeiro para garantir que está rodando
ssh_exec "$SERVER_PASSWORD" "$SERVER_USER" "
    echo '$SERVER_PASSWORD' | sudo -S bash -c '
        # Testar configuração do nginx
        if nginx -t; then
            systemctl reload nginx || service nginx reload
            echo \"Nginx recarregado\"
            sleep 2
        else
            echo \"ERRO: Configuração do Nginx inválida!\"
            exit 1
        fi
        
        # Verificar se o certificado já existe
        if [ -f \"/etc/letsencrypt/live/$DOMAIN/fullchain.pem\" ]; then
            echo \"Certificado SSL já existe e está configurado.\"
            echo \"Pulando renovação (certificados Let'\''s Encrypt são renovados automaticamente pelo cron).\"
        else
            echo \"Obtendo novo certificado SSL...\"
            # Obter certificado com timeout de 3 minutos
            timeout 180 certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --register-unsafely-without-email --redirect 2>&1 || {
                echo \"Tentando obter certificado sem auto-configurar nginx...\"
                # Tentar obter apenas o certificado
                timeout 180 certbot certonly --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --register-unsafely-without-email 2>&1
                if [ -f \"/etc/letsencrypt/live/$DOMAIN/fullchain.pem\" ]; then
                    echo \"Certificado obtido! Recarregando nginx...\"
                    systemctl reload nginx || service nginx reload
                else
                    echo \"Atenção: Certificado não pôde ser obtido automaticamente.\"
                    echo \"Isso pode acontecer se o domínio não estiver apontando para este servidor.\"
                    echo \"Execute manualmente: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN\"
                fi
            }
        fi
    '
"

echo -e "${GREEN}✓ Certificado SSL configurado!${NC}"

# 9. Verificar se o site está online
echo -e "\n${GREEN}[9/9] Verificando se o site está online...${NC}"
sleep 5

# Verificar HTTP (deve redirecionar para HTTPS)
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://$DOMAIN" || echo "000")
# Verificar HTTPS
HTTPS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" 2>/dev/null || echo "000")

if [[ "$HTTP_CODE" =~ ^(301|302)$ ]] || [[ "$HTTPS_CODE" =~ ^(200|301|302)$ ]]; then
    echo -e "${GREEN}✓ Site está online e respondendo!${NC}"
    if [[ "$HTTPS_CODE" =~ ^(200|301|302)$ ]]; then
        echo -e "${GREEN}✓ HTTPS funcionando corretamente!${NC}"
    fi
else
    echo -e "${YELLOW}⚠ Site pode estar ainda configurando. Verifique manualmente em alguns minutos.${NC}"
fi

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}  Deploy Concluído com Sucesso!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "\n${GREEN}✓ Site disponível em:${NC}"
echo -e "  http://$DOMAIN (redireciona para HTTPS)"
echo -e "  https://$DOMAIN"
echo -e "  https://www.$DOMAIN"
echo -e "\n${GREEN}✓ SSL/HTTPS configurado automaticamente!${NC}"

