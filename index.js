const http = require('http');
const server = http.createServer((request, response) => {
  response.end("Hello World\n" + wiki());
});
server.listen(process.env.PORT);

function wiki() {
  const url = "http://ja.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=revisions&rvprop=content&titles=AKB48";
   fetch(url)
    .then(response => response.text())
    .then(data => {
        const sz=data;
           }); 
  return sz;
}
