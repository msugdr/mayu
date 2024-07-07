const http = require('http');

const server = http.createServer(async (request, response) => {
    try {
        const sz = await wiki("AKB48");
        response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
        response.end("Hello World Mayu!!\n" + sz);
    } catch (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end("Error: " + error.message);
    }
});

server.listen(process.env.PORT);

async function wiki(keyword) {
//    const url = "http://ip.jsontest.com/";
//    const url = "http://ja.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=revisions&rvprop=content&titles=AKB48";
    const urlBase="https://ja.wikipedia.org/w/api.php?origin=*";
    var urlPara={
      format:"json",
      action:"query",
      prop:"extracts",
      explaintext:"",
      exintro:"",
      titles:"AKB48"
    };
    urlPara["titles"]=keyword;
    var url=urlBase;
    Object.keys(urlPara).forEach(function(key){
      url+= "&" + key + "=" + urlPara[key];
    });
    const res = await fetch(url);
    const dat = await res.json();
    for (const page in dat.query.pages) {
        result=dat.query.pages[page].extract;
    }
    return result;
}
