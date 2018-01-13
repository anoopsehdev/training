var http = require("http");
var myLib = require("./readFileAsync.js");//require("readFile.js");
//var event = require("events");
const port=8080;

//var myEvent = event.EventEmitter();

var server = http.createServer(function (request, response){
  
  if (request.url != "/favicon.ico") { //otherwise this function is called twice
    console.log("Received Request", request.url);
    //console.log(request);
    response.writeHead(200, {"content-type":"text/plain"});
    response.write("Hello World !!!\n\n");

    //var fileData = myLib.readFileAsync("testData.txt");
    // console.log("Calling readFileAsync");
    // response.end("File: ", myLib.readFileAsync("testData.txt"));
    // console.log("Ending CreateServer fucntion");

    myLib.readFileAsync("testData.txt", function(data){
      console.log("Setting Response ....");
      response.end(data.toString());
    });
     


    //response.end();
  }
}
);

server.listen(port, function(){
  console.log("Server Running at : ", port);
}

);
