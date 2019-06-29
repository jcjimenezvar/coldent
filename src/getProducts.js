"use strict";

let products = require("../constants/constants");

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
  console.log(brand)
  try {
    switch (brand) {
      case 'Vita':
        productBrandList = products.vita;
        console.log(productBrandList);
        
        break;
      case 'Bego':
        productBrandList;
        break;
      case 'Ivoclar':
        productBrandList;
        break;
      case 'Zhermack':
        productBrandList;
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
        productBrandList = products.vita;
        break;
    }
  } catch (error) {
    throw error.message;
  }
  return productBrandList;
};
