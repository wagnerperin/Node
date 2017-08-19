var http = require('http');

describe('#ProdutosController', function(){
    it('#listagem json', function(done){
        var config = {
            hostname : 'localhost',
            port : 3000,
            path : '/produtos',
            headers : {
                'Accept' : 'application/json'
            }
        };

        http.get(config, function(res){
            if(res.statusCode == 200){
                console.log('Status Ok.');
            }
            if(res.headers['content-type'] == 'application/json; charset=utf-8'){
                console.log('Content-type Ok.');
            }
            done();
        });
    });
});