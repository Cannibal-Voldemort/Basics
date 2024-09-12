const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {
  // console.log("New Req Rec..")
//   console.log(req);
     
const log = `${Date.now()}: ${req.url}New Req Recieved\n`
    fs.appendFile("log.txt", log, (err, data) =>{
        switch(req.url){
            case '/':
                res.end("Hi Aman")
                break
                case '/about':
                res.end("I am a frontend Developer trying to learn backend starting from node.js")
                break
                default:
                    res.end("404 Not Found")
        }
        
    })
});

myServer.listen(8000, () => console.log("Server Started"));
