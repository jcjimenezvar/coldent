"use strict";

let products = require('../constants/constants')

exports.getProducts = async (req, res) => {
  try {
    return products.principalProducts
  } catch (error) {
    throw error.message;
  }
}
