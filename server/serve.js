const express = require("express")

const PORT = process.env.PORT || 3020

const log = require("node-pretty-log")

const app = express()

const reqd = [ 'PORT' ]

const { resolve } = require('path')

app.use('/static', express.static(__dirname + '/../build'))
app.use('/', express.static(__dirname + '/../build'))

// general catch-all case, for if the route does not exist.
app.all("*", (req, res) => res.sendFile(resolve(__dirname + '/../build/index.html')))

app.listen(PORT, () => log("success", `HTTP server listening.`, { port: PORT }))