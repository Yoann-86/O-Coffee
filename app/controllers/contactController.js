const emailjs = require("@emailjs/nodejs");
const { addUser } = require("../dataMapper");

const contactController = {
  contactPage: (req, res) => {
    res.render("contact", {
      cssPage: "forms-pages",
      pageTitle: "Nous contacter",
    });
  },
  validatedForm: async (req, res) => {
    try {
      addUser(req.body);
      const firstname = req.body.firstname;

      const templateParams = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        message: req.body.message,
      };

      const options = {
        publicKey: process.env.EMAILJS_PUBKEY,
        privateKey: process.env.EMAILJS_PRIVKEY,
      };

      emailjs
        .send(
          process.env.ID_TEMPLATE,
          process.env.MAIL_TEMPLATE,
          templateParams,
          options
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

      res.render("contactConfirm", {
        cssPage: "forms-pages",
        pageTitle: "Confirmation de contact",
        firstname,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = contactController;
