var fs = require("fs");

function readFileSync(fileName) {
    console.log("About the Read the File");

    var data = fs.readFileSync(fileName);
    
    console.log("Read File");
    console.log(data.toString());
    console.log("End Reading File");
}

readFileSync("testData.txt");