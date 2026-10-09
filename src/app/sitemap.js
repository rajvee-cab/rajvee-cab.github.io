export default function sitemap() {
  const baseUrl = 'https://rajvee-cab.github.io';
  const now = new Date();

  return [
    // Main Homepage
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Key Gujarat Cities (Local & Outstation Hubs)
    {
      url: `${baseUrl}/cab-service-rajkot/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cab-service-ahmedabad/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
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
      url: `${baseUrl}/cab-service-bhavnagar/`,
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

    // High Demand Outstation Routes
    {
      url: `${baseUrl}/rajkot-to-ahmedabad-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ahmedabad-to-surat-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rajkot-to-somnath-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rajkot-to-dwarka-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ahmedabad-to-vadodara-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rajkot-to-hirasar-airport-cab/`,
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
    {
      url: `${baseUrl}/ahmedabad-to-statue-of-unity-cab/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
