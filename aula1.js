var http = require('http');
var dia= require('./biblioteca');
http.createServer(function (req,res){
   res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h2>Brasil 2 x 1 </h2> \n');
    res.write(Date().substring(16,24)+ '<br>');
    res.write('<p style=color:pink>'+Date().substring(16,24)+'<br>');
    res.end('Thaianny Linda');
    
}).listen(3000);
