// Node essentials middlewares
require("dotenv").config();
const express = require("express");

// Homemade router middleware
const router = require("./app/router");

// Params
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views/pages");

app.use(express.static("integration"));
app.use(express.urlencoded({ extended: true }));

// App
app.use(router);
app.use((req, res) =>
  res.render("404", {
    cssPage: "404",
    pageTitle: "Erreur 404",
  })
);
app.listen(PORT, () => {
  console.log(`🚀 Server launched at localhost:${PORT}`);
});
