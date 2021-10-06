const express = require("express");

const productController = require("../controllers/ProductsController");


//Multer configuration
const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const upload = multer({
    storage: storageConfig
});

//Products routes
const router = express.Router();

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getById);
router.post("/products", upload.single("image"), productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.delete);
router.patch("/products/:id/image", upload.single("image"), productController.changeProductSrc);


module.exports = router;