const express = require("express")

const PORT = process.env.PORT || 3020

const log = require("node-pretty-log")

const app = express()

const reqd = [ 'PORT' ]

const { resolve } = require('path')

app.use('/static', express.static('static'))
app.use('/', express.static('static'))

// general catch-all case, for if the route does not exist.
app.all("*", (req, res) =>
  res
    .json({
      success: false,
      reason: "Route not found"
    })
    .status(404)
)

app.listen(PORT, () => log("success", `HTTP server listening.`, { port: PORT }))
