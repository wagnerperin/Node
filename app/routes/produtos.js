module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);


        produtosBanco.lista((err, result) => {
            res.render('produtos/lista', {lista : result});
        });

        connection.end();
    });
}