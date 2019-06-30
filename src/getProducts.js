"use strict";

let products = require("../constants/constants");
let productsdVita = require("../productsByBrand/vita");
let productsdBego = require("../productsByBrand/bego");
let productsdZhermack = require("../productsByBrand/zhermack");
let productsdWyh = require("../productsByBrand/wyh");
let productsdIvoclar = require("../productsByBrand/ivoclar");
let productsdYety = require("../productsByBrand/yety");
let productsdDentona = require("../productsByBrand/dentona");
let productsdKeystone = require("../productsByBrand/keystone");
let productsdRenfert = require("../productsByBrand/renfert");

exports.getProducts = async (req, res) => {
  try {
    return products.principalProducts;
  } catch (error) {
    throw error.message;
  }
};

exports.getMenuProducts = async (req, res) => {
  try {
    return products.menuProducts;
  } catch (error) {
    throw error.message;
  }
};

exports.getProductsByBrand = async brand => {
  let productBrandList;
  try {
    switch (brand) {
      case "Vita":
        productBrandList = productsdVita.vita;
        break;
      case "Bego":
        productBrandList = productsdBego.bego;
        break;
      case "Ivoclar":
        productBrandList = productsdIvoclar.ivoclar;
        break;
      case "Zhermack":
        productBrandList = productsdZhermack.zhermack;
        break;
      case "Yety":
        productBrandList = productsdYety.yety;
        break;
      case "Dentona":
        productBrandList = productsdDentona.dentona;
        break;
      case "Keystone":
        productBrandList = productsdKeystone.keystone;
        break;
      case "WyH":
        productBrandList = productsdWyh.wyh;
        break;
      case "Renfert":
        productBrandList = productsdRenfert.renfert;
        break;
      default:
        productBrandList = productsdVita.vita;
        break;
    }
  } catch (error) {
    throw error.message;
  }
  return productBrandList;
};
