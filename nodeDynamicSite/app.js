var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    setInterval(function(){
        res.write(new Date() + "\n");
    }, 1000);
    res.write("this is before the end \n");
    //res.end('Hello World \n');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');