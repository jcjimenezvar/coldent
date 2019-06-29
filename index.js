const express = require("express");
const app = express();
const sendMessage = require("./src/sendMessage");
const products = require("./src/getProducts");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.get("/", async function(req, res) {
  const principalProducts = await products.getProducts(
    req,
    res,
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
  const menuProducts = await products.getMenuProducts(req, res, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  const context = {
    list: principalProducts,
    menuProducts: menuProducts
  };
  res.render("index", context);
});

app.get("/nosotros", async function(req, res) {
  const menuProducts = await products.getMenuProducts(req, res, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  const context = {
    menuProducts: menuProducts
  };
  res.render("nosotros", context);
});

app.get("/productos", async function(req, res) {
  const menuProducts = await products.getMenuProducts(req, res, (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  const productsByBrand = await products.getProductsByBrand(req.query.brand);
  const context = {
    menuProducts,
    productsByBrand    
  };
  res.render("productos", context);
});

app.get("/productosBrand", async function(req, res) {
  const menuProducts = await products.getMenuProducts(req, res, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  const productsByBrand = await products.getProductsByBrand(req.query.brand);
  const context = {    
    menuProducts,
    productsByBrand
  };
  res.render("productos", context);
});

app.get("/contacto", async function(req, res) {
  const menuProducts = await products.getMenuProducts(req, res, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  const context = {
    menuProducts: menuProducts
  };
  res.render("contacto", context);
});

app.post("/sendMessage", async function(req, res) {
  await sendMessage.sendMessage(req, res, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  res.render("contacto");
});

app.listen(port);
console.log("Server start at port", port);
