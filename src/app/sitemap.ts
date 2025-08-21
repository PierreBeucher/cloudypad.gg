import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cloudypad.gg',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: 'https://app.cloudypad.gg/pricing',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    {
      url: 'https://cloudypad.gg/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
} 