const express = require('express');
const app = express();
const sendMessage = require('./src/sendMessage')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000;

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

app.post('/sendMessage', async function  (req, res) {
    await sendMessage.sendMessage(req, res, (err, data)=>{
       if(err) throw err;
       console.log(data); 
    })
    res.render('contacto');
})
 
app.listen(port)
console.log('Server start at port',port);