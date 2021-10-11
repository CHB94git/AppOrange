const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    codeCategory: String,
    name: String,
    description: String
});

module.exports = mongoose.model("Category", categorySchema);

