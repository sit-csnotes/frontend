const express = require("express")

const PORT = process.env.PORT || 3020

const log = require("node-pretty-log")

const app = express()

const reqd = [ 'PORT' ]

const { resolve } = require('path')

    // *do not* do this on the fly with a catchall route!
    // otherwise, we could run into filename injection exploits!

const pagesPath = resolve(__dirname + "/../pages/")

const pages = require('fs').readdirSync(pagesPath)
pages.forEach(page => {
    page = page.replace('.html', '')
    if(page != 'index') {
        app.get(`/${page}`, (req, res) => res.sendFile(`${page}.html`, {root: pagesPath}))
        app.get(`/${page}.html`, (req, res) => res.redirect(`/${page}`))
    }
})

app.get('/', (req, res) => res.sendFile(`index.html`, {root: pagesPath}))
app.get('/index.html', (req, res) => res.redirect('/'))

app.use('/static', express.static('static'))

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
