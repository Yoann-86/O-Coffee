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

//Get method routes
router.get("/", homePage);
router.get("/catalog", catalogPage);
router.get("/product/:id", productPage);
router.get("/shop", shopPage);
router.get("/contact", contactPage);

//Post method routes
router.post("/contact", validatedForm);

module.exports = router;
