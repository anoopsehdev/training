// var fs = require("fs");

// module.exports = {
    
//     readFileAsync : function (fileName) {
//     console.log("About the Read the File");

//     fs.readFile(fileName, function(err, data){
//         if (err) {console.log("Error Happened while reading he file.")};
//         setTimeout (function(){
//             console.log("Read File");
//             console.log(data.toString());
//         }, 1000)
//     });

//     console.log("End Reading File");
//     }
// };

var fs = require("fs");

function readFileAsync(fileName, callback) {
    console.log("About the Read the File");

    fs.readFile(fileName, function(err, data){
        if (err) {console.log("Error Happened while reading the file.")};
        // setTimeout (function(){
        //     console.log("Read File");
        //     console.log(data.toString());
        // }, 1000)
        console.log("End Reading File");
        callback(data);
    });

    console.log("End of readFileAsync function");
};

module.exports.readFileAsync = readFileAsync;