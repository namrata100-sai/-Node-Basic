const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    // console.log("new req");
    // console.log(req)
     const log = `\n ${Date.now()} = ${req.url}: New request received \n`;   
    fs.appendFile("./log.txt",log,(err,data)=>
    {
        // res.end("Hello from server");
        switch(req.url)
        {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("This is namrata here");
                break;
            default:
                res.end("404 found")
                break;
        }
    });
  


});
myServer.listen(8000,()=>{console.log("server started")})