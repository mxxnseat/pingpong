const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {

    let body = null
    try {
        body = fs.readFileSync(`./app/${req.url}`)
    } catch (e) {
        console.log(e)
        body = fs.readFileSync(`./app/index.html`)
    }

    res.end(body)
});


const PORT = process.env.PORT || 1111;

server.listen(PORT);

console.log(`server live on ${PORT} port`);