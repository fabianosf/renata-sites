import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blogData";

const Blog = () => {
  const articles = blogArticles.map((article) => ({
    id: article.id,
    category: article.category,
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    readTime: article.readTime,
    image: article.image,
    author: article.author,
  }));

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Blog de Nutrição e Saúde - Renata Bastos
          </h1>
          <p className="text-lg text-muted-foreground">
            Aprenda sobre nutrição ortomolecular, saúde e bem-estar com artigos especializados da nutricionista Renata Bastos
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group block h-full no-underline"
            >
              <article
                className="bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth animate-fade-in h-full flex flex-col cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={article.image}
                    alt={`${article.title} - Artigo sobre ${article.category} por ${article.author.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent pointer-events-none"></div>
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground pointer-events-none">
                    {article.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="group-hover:text-primary font-semibold inline-flex items-center">
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/blog">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
