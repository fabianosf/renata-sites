import { servicesData } from "@/data/servicesData";
import { blogArticles } from "@/data/blogData";

export const generateSitemap = () => {
  const baseUrl = "https://clinicarenatabastos.com.br";
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/inicio", priority: "1.0", changefreq: "weekly" },
    { url: "/sobre", priority: "0.9", changefreq: "monthly" },
    { url: "/servicos", priority: "0.9", changefreq: "weekly" },
    { url: "/depoimentos", priority: "0.8", changefreq: "monthly" },
    { url: "/blog", priority: "0.9", changefreq: "weekly" },
    { url: "/contato", priority: "0.8", changefreq: "monthly" },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `/servico/${service.id}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  const blogPages = blogArticles.map((article) => ({
    url: `/blog/${article.id}`,
    priority: "0.7",
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...servicePages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
};

