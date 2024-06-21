const session = require("express-session");
const {
  getNewCoffees,
  getAllCharcteristics,
  getAllCoffees,
  getCoffeesByCategory,
  getOneCoffeeById,
} = require("../dataMapper");

const mainController = {
  homePage: async (req, res) => {
    try {
      console.log(req.session);
      const newCoffees = await getNewCoffees();
      res.render("home", {
        cssPage: "landing",
        pageTitle: "Accueil",
        cssActivation: "active",
        newCoffees,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
  catalogPage: async (req, res) => {
    try {
      const characteristics = await getAllCharcteristics();
      let coffees = await getAllCoffees();
      const category = req.query.category;
      if (category !== undefined && category !== "") {
        coffees = await getCoffeesByCategory(category.toLowerCase());
      }

      res.render("catalog", {
        cssPage: "catalog",
        pageTitle: "Catalogue",
        characteristics,
        coffees,
        category,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
  productPage: async (req, res) => {
    try {
      const id = req.params.id;
      const coffee = await getOneCoffeeById(id);
      res.render("product", {
        cssPage: "product",
        pageTitle: coffee.name,
        coffee,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
  shopPage: (req, res) => {
    res.render("shop", {
      cssPage: "shop",
      pageTitle: "La boutique",
    });
  },
};

module.exports = mainController;
