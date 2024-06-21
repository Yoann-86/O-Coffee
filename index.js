// Node essentials middlewares
require("dotenv").config();
const express = require("express");
const session = require("express-session");

// Homemade router middleware
const router = require("./app/router");

// Params
const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  session({
    name: "sid",
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

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
