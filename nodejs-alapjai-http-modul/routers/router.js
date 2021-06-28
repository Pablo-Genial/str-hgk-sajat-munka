/* eslint-disable comma-dangle */
const SiteController = require('../controller/site.controller')

const router = {
  '/': (res) => SiteController.index(res),
  '/about': (res) => SiteController.about(res),
  '/contact': (res) => SiteController.contact(res),
}

module.exports = Object.freeze(router)
