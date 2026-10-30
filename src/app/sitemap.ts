import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { competitions } from "@/content/competitions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://satyakimandal.com";

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const compUrls = competitions.map((c) => ({
    url: `${baseUrl}/competitions/${c.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectUrls,
    ...compUrls,
  ];
}
