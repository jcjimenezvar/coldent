"use strict";

let products = require("../constants/constants");
let productsdVita = require("../productsByBrand/vitaP/vita");
let productsdBego = require("../productsByBrand/bego/bego");
let productsdZhermack = require("../productsByBrand/zhermack/zhermack");
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

exports.getProductsByBrand = async (product, category) => {
  let productBrandList;
  try {
    switch (product) {
      case "vita":
        switch (category) {
          case "ceramicas":
            productBrandList = productsdVita.informationCategory.ceramicas;
            break;
          case "dientes":
            productBrandList = productsdVita.informationCategory.dientes;
            break;
          case "bloquesDiscos":
            productBrandList = productsdVita.informationCategory.bloqueDiscos;
            break;
          case "equipos":
            productBrandList = productsdVita.informationCategory.equipos;
            break;
          case "varios":
            productBrandList = productsdVita.informationCategory.varios;
            break;
          default:
            productBrandList = productsdVita.vita;
            break;
        }
        break;
      case "bego":
        switch (category) {
          case "ceras":
            productBrandList = productsdBego.informationCategory.ceras;
            break;
          case "metales":
            productBrandList = productsdBego.informationCategory.metales;
            break;
          case "revestimientos":
            productBrandList = productsdBego.informationCategory.revestimientos;
            break;
          case "varios":
            productBrandList = productsdBego.informationCategory.varios;
            break;
          default:
            productBrandList = productsdBego.bego;
            break;
        }
        break;
      case "ivoclar":
        productBrandList = productsdIvoclar.ivoclar;
        break;
      case "zhermack":
        switch (category) {
          case "desinfeccion":
            productBrandList =
              productsdZhermack.informationCategory.desinfeccion;
            break;
          case "siliconascon":
            productBrandList =
              productsdZhermack.informationCategory.siliconascon;
            break;
          case "siliconaslab":
            productBrandList =
              productsdZhermack.informationCategory.siliconaslab;
            break;
          case "yesos":
            productBrandList = productsdZhermack.informationCategory.yesos;
            break;
          default:
            productBrandList = productsdBego.bego;
            break;
        }
        break;
      case "yety":
        productBrandList = productsdYety.yety;
        break;
      case "dentona":
        productBrandList = productsdDentona.dentona;
        break;
      case "keystone":
        productBrandList = productsdKeystone.keystone;
        break;
      case "wyh":
        productBrandList = productsdWyh.wyh;
        break;
      case "renfert":
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
