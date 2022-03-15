const http = require('http');

http.createServer( (req, res) => {
    console.log('servidor rodando')
    res.writeHead(200, {'content-type':'text/plain'})
    if(req.url === '/'){
        res.end('Voce esta na pagina principal')
    }else if(req.url === '/contato'){
        res.end('voce esta na pagina de contato')
    }else{
        res.end('desculpe, essa pagina nao existe')
    }
}).listen(8080)