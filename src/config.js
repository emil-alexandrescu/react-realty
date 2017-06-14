require('dotenv').config();

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '3000',
  apiBaseUrl: process.env.API_URL || 'https://api.github.com',
  app: {
    googleAnalytics: {
      appId: process.env.GOOGLE_ANALYTIC_ID || 'UA-XXXXXXXX-X'
    },
    title: process.env.APP_TITLE || 'React Realty',
    description: process.env.APP_DESCRIPTION || 'React Realty MVP',
    head: {
      titleTemplate: process.env.APP_TITLE || 'React Realty',
      meta: [
        { name: 'description', content: process.env.APP_DESCRIPTION || 'React Realty MVP' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: process.env.APP_TITLE || 'React Realty' },
        { property: 'og:image', content: 'https://facebook.github.io/react/img/logo_og.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: process.env.APP_TITLE || 'React Realty' },
        { property: 'og:description', content: process.env.APP_DESCRIPTION || 'React Realty MVP' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '' },
        { property: 'og:creator', content: '' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);
