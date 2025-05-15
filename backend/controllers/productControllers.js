const productService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
};

exports.createProduct = async (req, res) => {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
};