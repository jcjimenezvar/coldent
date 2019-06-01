const express = require('express');
const app = express();
const sendMessage = require('./src/sendMessage')
const products = require('./src/getProducts')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs')
app.get('/', async function (req, res) {
    const principalProducts =  await products.getProducts(req, res, (err, data)=>{
        if(err) throw err;
        console.log(data); 
     })
    const context ={
        list: principalProducts
    }
    res.render('index', context);
})

app.get('/nosotros', function (req, res) {
    res.render('nosotros');
})

app.get('/productos', async function (req, res) {    
    res.render('productos', data);
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