import { dynamicRoutesData } from '@/data/allRoutesData';
import { blogPosts } from '@/data/blogData';

export default function sitemap() {
  const baseUrl = 'https://rajvee-cab.github.io';
  const now = new Date();

  const dynamicRouteEntries = dynamicRoutesData.map((route) => ({
    url: `${baseUrl}/${route.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  return [
    // Main Homepage
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // All Routes Directory
    {
      url: `${baseUrl}/routes/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.98,
    },

    // Travel Guides & Blog Hub
    {
      url: `${baseUrl}/blog/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    // Travel Guides & Articles
    ...blogEntries,

    // Priority Departure Hubs & Cities
    {
      url: `${baseUrl}/cab-service-rajkot/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/cab-service-ahmedabad/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/cab-service-surat/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cab-service-vadodara/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cab-service-gandhinagar/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-jamnagar/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-morbi/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-bhavnagar/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-junagadh/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-bhuj/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-somnath/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cab-service-dwarka/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Key Routes from Rajkot (HQ)
    {
      url: `${baseUrl}/rajkot-to-ahmedabad-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rajkot-to-hirasar-airport-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/rajkot-to-surat-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/rajkot-to-vadodara-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/rajkot-to-somnath-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/rajkot-to-dwarka-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/rajkot-to-jamnagar-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rajkot-to-morbi-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Key Routes from Ahmedabad (Hub)
    {
      url: `${baseUrl}/ahmedabad-to-surat-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/ahmedabad-to-vadodara-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/ahmedabad-to-statue-of-unity-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/ahmedabad-to-mumbai-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/surat-to-mumbai-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // 500+ Programmatic Dynamic Gujarat Corridors
    ...dynamicRouteEntries,
  ];
}
