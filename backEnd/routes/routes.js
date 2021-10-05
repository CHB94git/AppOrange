const express = require("express");

const productController = require("../controllers/ProductsController");


//Multer configuration
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, res, cb) => {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("image");

const router = express.Router();

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getById);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);

module.exports = router;