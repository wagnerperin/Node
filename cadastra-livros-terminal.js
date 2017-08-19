var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};

var client = http.request(config, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('Corpo:' + body);
    });
});

var produto = {
    titulo: '',
    descricao: 'node, javascript e http',
    preco: 100
};

client.end(JSON.stringify(produto));