var app = require('./config/express')();

app.get('/produtos', (req, res) => {
    res.render("produtos/lista");
});

app.listen(3000, () => {
    console.log('Servidor iniciado.');
});