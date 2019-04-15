const express = require('express');
const app = express();
const sendMessage = require('./src/sendMessage')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


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
    let result = await sendMessage.sendMessage(req, res, (err, data)=>{
       if(err) throw err;
       console.log(data); 
    })
    res.render('productos');
})
 
app.listen(3000)
console.log('Server start at port',3000);