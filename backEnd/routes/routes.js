const express = require("express");

const productController = require("../controllers/ProductsController");
const categoryController = require("../controllers/CategoryController");
const userController = require("../controllers/UserController");

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

router.get("/categories", categoryController.getAll);
router.get("/categories/:id", categoryController.getById);
router.post("/categories", upload.single("image"), categoryController.create);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);


//rutas de usuario
router.post('/users/add', userController.add);
router.post('/users/login', userController.login);



module.exports = router;