import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://akiraas.com';
  const pages = [
    { url: base,                   priority: 1.0,  changeFreq: 'weekly'  },
    { url: `${base}/about`,        priority: 0.8,  changeFreq: 'monthly' },
    { url: `${base}/events`,       priority: 0.9,  changeFreq: 'weekly'  },
    { url: `${base}/consulting`,   priority: 0.8,  changeFreq: 'monthly' },
    { url: `${base}/products`,     priority: 0.8,  changeFreq: 'monthly' },
    { url: `${base}/contact`,      priority: 0.7,  changeFreq: 'yearly'  },
  ];

  return pages.map(p => ({
    url:              p.url,
    lastModified:     new Date(),
    changeFrequency:  p.changeFreq as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority:         p.priority,
  }));
}
