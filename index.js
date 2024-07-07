const http = require('http');

const server = http.createServer(async (request, response) => {
    try {
        const sz = await wiki();
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Hello World Mayu!!\n" + sz);
    } catch (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end("Error: " + error.message);
    }
});

server.listen(process.env.PORT);

async function wiki() {
    const url = "http://ip.jsontest.com/";
    const res = await fetch(url);
    const dat = await res.text();
    console.log(dat);
    return dat;
}
