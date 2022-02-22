const http = require('http');
const port = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
    res.writeHead(200);
    if (req.url == '/'){
        res.write('<h1> Welcome! </h1>');
    }
    else if (req.url == '/canal'){
        res.write('<h1> Practice and Study! </h1>');
    }
    else if (req.url == '/curso'){
        res.write('<h1> NODEJS! </h1>');
    }
    res.end();
});

servidor.listen(port,host,()=>{console.log('server running ok')});
