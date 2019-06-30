"use strict";

let products = require("../constants/constants");
let productsdVita = require("../productsByBrand/vita");
let productsdBego = require("../productsByBrand/bego");
let productsdZhermack = require("../productsByBrand/zhermack");

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
      case 'Vita':
        productBrandList = productsdVita.vita;
        break;
      case 'Bego':
        productBrandList = productsdBego.bego;
        break;
      case 'Ivoclar':
        productBrandList
        break;
      case 'Zhermack':
        productBrandList = productsdZhermack.zhermack;
        break;
      case 'Yety':
        productBrandList;
        break;
      case 'Dentona':
        productBrandList;
        break;
      case 'Keystone':
        productBrandList;
        break;
      case 'WyH':
        productBrandList;
        break;
      case 'Renfer':
        productBrandList;
        break;
      case 'Otros':
        productBrandList;
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
