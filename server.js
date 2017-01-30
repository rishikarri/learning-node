var http = require('http');

// require is a native node js method 
// works exactly like the import function - there is a node modulde somewhere called http - whatever that node module is exporting is going to be knowon as http

// console.log(http);

var server = http.createServer((req, rest)=>{
	console.log(req.ip); 
})

// http server got created

server.listen(8000);

// as soon as we made a request to port 8000 and node was listening to the server - iot created an http server and logged the request to the console

// once the server has loaded - just like apache - you need to restart it when you make a change