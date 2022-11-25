var http = require('http');
http.createServer(function (req,res){
   res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h2>Brasil 2 x 0 Sevria</h2> \n');
    res.write(Date().substring(16,24)+ '<br>');
    res.end('Thaianny linda!');
    
}).listen(3000);
