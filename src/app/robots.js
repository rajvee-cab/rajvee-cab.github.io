export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://rajvee-cab.github.io/sitemap.xml',
  };
}
