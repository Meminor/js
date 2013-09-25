var http = require("http");
console.log("Starting");

var host = 

var server = http.createServer(function(request, response){
    console.log("Received request: " + request.url);
    response.writeHead(200, {
        "Content-type": "text/plain"
    });
    response.end("Hello world");
});