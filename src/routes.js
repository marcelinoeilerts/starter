const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Marcelino' })
})

module.exports = routes;