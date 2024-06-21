const { checkAuth, addProduct } = require("../dataMapper");

const adminController = {
  loginPage: async (req, res) => {
    if (!req.session.userId || !req.session.allowed) {
      res.render("login", {
        cssPage: "forms-pages",
        pageTitle: "Connexion",
      });
    } else {
      if (req.session.allowed === true) {
        res.redirect(`/admin/${req.session.userId[0]}`);
      }
    }
  },
  logger: async (req, res) => {
    try {
      const connectionIdentifier = [req.body.user, req.body.password];
      req.session.userId = connectionIdentifier;
      const check = await checkAuth(req.session.userId);
      if (check === "true") {
        req.session.allowed = true;

        res.redirect(`/admin/${req.session.userId[0]}`);
      } else {
        //todo Show an error message
        req.session.userId = [];
        res.redirect("/admin");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
  adminLogged: (req, res) => {
    if (!req.session.userId) {
      res.redirect("/admin");
    }
    res.render("adminPanel", {
      cssPage: "forms-pages",
      pageTitle: "Ajouter un produit",
    });
  },
  addProduct: async (req, res) => {
    try {
      addProduct(req.body);
      res.redirect("/admin");
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = adminController;
