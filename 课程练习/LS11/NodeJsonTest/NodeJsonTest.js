var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    //console.log(req);

    var getDataObj = url.parse(req.url,true).query;
    console.log(getDataObj);
    var arrayIndex = getDataObj.id-1;
    console.log(typeof arrayIndex,arrayIndex);
    fs.readFile("./NodeJsonTest.json", function readData(err, data) {
        var test1=JSON.parse(data);
         console.log("test1:",test1[arrayIndex]);


        //res.writeHead(200, {"Content-Type": "text/plain",
        res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "GET, POST"
        });
        //console.log(data,data instanceof Array);
        //console.log(data instanceof String,data instanceof Object);
        // console.log(JSON.stringify(data.toString()),data instanceof Object);
        //data = '{"x":2}';

        res.end(JSON.stringify(test1[arrayIndex]));
        // res.end(data);
    });

}).listen(8080,"127.0.0.1");
console.log("start server!");


/*
var readableStream = fs.createReadStream("./NoseJsonTest.txt");
var data = "";
readableStream.on("data", function(chunk){
    data += chunk;
});
readableStream.on("end", function(){
    console.log(data,typeof data);
});
 */