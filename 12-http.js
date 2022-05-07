// HTTP Module(allow us to setup a web server)

// HTTP Module (Setup)



const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('Welcome to our home page')
    // res.end()

    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seems to find the page your are looking for</p>
        <a href="/">back home</a>`)
})

server.listen(5000)

