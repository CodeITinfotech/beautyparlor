/** @type {import('next-sitemap').Config} */
module.exports = {
  siteUrl: 'https://codeitinfotech.github.io/dazzle-beauty',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
}
