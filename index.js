const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs')
app.get('/', function (req, res) {
    res.render('index');
})

app.get('/nosotros', function (req, res) {
    res.render('nosotros');
})

app.get('/productos', function (req, res) {
    res.render('productos');
})

app.get('/contacto', function (req, res) {
    res.render('contacto');
})
 
app.listen(3000)
console.log('Server start at port',3000);