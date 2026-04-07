import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Instagram, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getArticleById, getRelatedArticles } from "@/data/blogData";
import { siteConfig } from "@/config/site";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;
  const relatedArticles = id ? getRelatedArticles(id, 3) : [];

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const handleInstagramClick = () => {
    window.open(siteConfig.social.instagram.url, "_blank", "noopener,noreferrer");
  };

  const handleFacebookClick = () => {
    window.open(siteConfig.social.facebook.url, "_blank", "noopener,noreferrer");
  };

  const articleDate = new Date(article.date.split(", ")[1] || new Date().getFullYear().toString());
  const publishedTime = articleDate.toISOString();
  const modifiedTime = new Date().toISOString();

  return (
    <div className="min-h-screen">
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords={`${article.category}, ${siteConfig.seo.keywords}`}
        image={article.image}
        url={`https://clinicarenatabastos.com.br/blog/${article.id}`}
        type="article"
        article={{
          publishedTime,
          modifiedTime,
          author: article.author.name,
          section: article.category,
        }}
      />
      <StructuredData
        type="article"
        article={{
          title: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: publishedTime,
          dateModified: modifiedTime,
          author: article.author.name,
        }}
      />
      <FAQSchema />
      <Header />
      
      {/* Hero Image Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={article.image}
          alt={`${article.title} - Artigo sobre ${article.category} por ${article.author.name}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </section>

      {/* Article Content */}
      <main className="container mx-auto px-4 lg:px-8 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Blog", to: "/blog" },
              { label: article.title },
            ]}
          />

          {/* Article Header */}
          <Card className="mb-8 overflow-hidden shadow-elevated">
            <CardContent className="p-8 lg:p-12">
              <Badge className="mb-4">{article.category}</Badge>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={`Foto de ${article.author.name} - ${article.author.role}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{article.author.name}</p>
                    <p className="text-sm">{article.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{article.date}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{article.readTime} de leitura</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 mb-8">
                <Share2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground mr-2">Siga a Renata:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleInstagramClick}
                  className="hover-scale"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleFacebookClick}
                  className="hover-scale"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-4
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-li:text-foreground/90
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ 
                  __html: article.content
                    .replace(/<script/gi, "&lt;script")
                    .replace(/<\/script>/gi, "&lt;/script&gt;")
                    .replace(/on\w+\s*=/gi, "data-disabled=")
                    .replace(/\n/g, '<br />')
                }}
              />
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Quer um Plano Nutricional Personalizado?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Agende uma consulta e descubra como a nutrição pode transformar sua vida
              </p>
              <Button
                size="lg"
                className="hover-scale"
                onClick={() => {
                  const message = encodeURIComponent(siteConfig.whatsappMessages.appointment);
                  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, "_blank");
                }}
              >
                Agendar Consulta Agora
              </Button>
            </CardContent>
          </Card>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                Artigos Relacionados
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-elevated transition-smooth hover-scale">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={related.image}
                          alt={`${related.title} - Artigo sobre ${related.category}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                          loading="lazy"
                        />
                        <Badge className="absolute top-4 left-4 bg-background/90">
                          {related.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
                          {related.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {related.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {related.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
