module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);


        produtosDAO.lista((err, result) => {
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista : result});
                },
                json: function() {
                    res.json(result);
                }
            });
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res){
        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, result){
           res.redirect('/produtos');
        });
    });
}