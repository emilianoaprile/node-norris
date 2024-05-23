const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const filePath = path.join(__dirname, "norrisDb.json")

const fetchData = async () => {
    return fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(data => {
        return data.value
    })
};

fetchData().then(randomQuote => {
    console.log(randomQuote)
})




const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('ok')
})

server.listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
})