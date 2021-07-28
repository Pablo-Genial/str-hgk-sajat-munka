const express = require('express')
const app = express()
const personService = require('./person/person.service')
const port = 3000

app.use('', require('./person/person.routes'))

// swagger docs
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/swagger.yaml')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
