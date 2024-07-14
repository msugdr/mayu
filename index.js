const http = require('http');
const json = { name: "Youna", age: 18, sex: "female" };
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(json));
});
server.listen(process.env.PORT);
