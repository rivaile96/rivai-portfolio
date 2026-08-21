import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rivai.my.id'

  const staticRoutes = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/stack`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ]

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }))

  return [...staticRoutes, ...projectRoutes]
}
