import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/blog",
    "/herramientas",
    "/herramientas/generador-rubricas",
    "/herramientas/calculadora-notas",
    "/herramientas/generador-situaciones-aprendizaje",
    "/herramientas/generador-criterios-evaluacion",
    "/sobre-nosotros",
    "/contacto",
    "/aviso-legal",
    "/politica-privacidad",
    "/politica-cookies"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));

  const categoryRoutes = categories.flatMap((c) => [
    {
      url: `${siteConfig.url}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    ...(c.subcategories ?? []).map((s) => ({
      url: `${siteConfig.url}/${c.slug}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6
    }))
  ]);

  const articleRoutes = articles.map((a) => ({
    url: `${siteConfig.url}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
