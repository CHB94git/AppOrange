const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    codeProduct: String,
    name: String,
    unit: String,
    price: Number,
    src: String,
    stock: Number,
    category: String,
    description: String
});

module.exports = mongoose.model("Product", productSchema);

