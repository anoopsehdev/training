var http = require("http");


var server = http.createServer(function (request, response){
  console.log("Received Request");
  response.writeToConsole("Hello World !!!");
}
);

server.listen(port, function(){
  console.log("Server Running at ", port);
}

);
