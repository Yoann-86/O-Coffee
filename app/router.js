const express = require("express");
const router = express.Router();

//Controllers :
const {
  homePage,
  catalogPage,
  productPage,
  shopPage,
} = require("./controllers/mainController");

const {
  contactPage,
  validatedForm,
} = require("./controllers/contactController");

const {
  loginPage,
  logger,
  adminLogged,
  addProduct,
} = require("./controllers/adminController");

//Get method routes
router.get("/", homePage);
router.get("/catalog", catalogPage);
router.get("/product/:id", productPage);
router.get("/shop", shopPage);
router.get("/contact", contactPage);
router.get("/admin", loginPage);
router.get("/admin/:user", adminLogged);
// router.get("/admin/add-product", addProductPage);

//Post method routes
router.post("/contact", validatedForm);
router.post("/admin", logger);
router.post("/admin/:user", addProduct);

module.exports = router;
