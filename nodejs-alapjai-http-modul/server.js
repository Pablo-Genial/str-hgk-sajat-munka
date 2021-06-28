/* eslint-disable comma-dangle */
const http = require('http')
const Router = require('./routers/router')

const port = 8080

http
  .createServer((req, res) => {
    Router[req.url] ? Router[req.url](res) : Router['/error404'](res)

    console.log(
      `Date: ${new Intl.DateTimeFormat('hu-HU').format(Date.now())} Url: ${
        req.url
      }  Method: ${req.method}`
    )
  })
  .on('error', (err) => console.log(`Server error: ${err.message}`))
  .on('listening', () =>
    console.log(`Server is running at http://127.0.0.1:${port}`)
  )
  .listen(port)
