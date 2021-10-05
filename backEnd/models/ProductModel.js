const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    unit: String,
    price: Number,
    src: String,
    stock: Number,
    category: String,
    desc: String
});

module.exports = mongoose.model("Product", productSchema);

