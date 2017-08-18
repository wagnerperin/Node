module.exports = function(app) {
    app.get('/produtos', (req, res) => {
        var connection = app.infra.connectionFactory();

        connection.query('select * from livros', (err, result) => {
            res.render('produtos/lista', {lista : result});
        });

        connection.end();
    });
}