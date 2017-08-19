var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
    beforeEach(function(done){
        var conn = express.infra.connectionFactory();
        conn.query("delete from livros", function(ex, res){
            if(!ex){
                done();
            }
        });
    });
    
    it('#listagem json', function(done){ 
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#cadastro de produtos invalidos', function(done){
        request.post('/produtos')
            .send({
                titulo:'',
                descricao:"teste",
                preco:"100,50"
            })
            .expect(400, done);
    });

    it('#cadastro de produtos validos', function(done){
        request.post('/produtos')
            .send({
                titulo:'teste 1',
                descricao:"teste 1",
                preco:100.20
            })
            .expect(302, done);
    });
});