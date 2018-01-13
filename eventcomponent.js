var event = require("events");

var myEvent = event.EventEmitter();

myEvent.on("Kill", function (err, data){
    console.log("Event triggered");
});


event.emit("Kill");