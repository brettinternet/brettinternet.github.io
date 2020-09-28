/**
 * @note To make a default layout, add `data/layout.js` with `module.exports = 'default.pug'`
 * @source https://github.com/11ty/eleventy/issues/380#issuecomment-568033456
 */
module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  buildTime: process.env.BUILD_TIME,
  buildVersion: process.env.BUILD_VERSION,
  url: 'https://brettinternet.com',
  title: 'brettinternet',
  author: {
    name: 'brett',
  },
  description: 'stories from data & technology',
  githubRepo: 'brettinternet/brettinternet.github.io',
  usernames: {
    twitter: 'brettinternet',
    github: 'brettinternet',
    linkedin: 'brettinternet',
  },
  routes: {
    home: '/',
    rss: '/rss.xml',
    archive: '/archive/',
  },
  trackingId: 'UA-91007995-3',
}
