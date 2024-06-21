const client = require("./client");

const dataMapper = {
  //Function to retrieve the last 3 and available products
  getNewCoffees: async () => {
    const sql = `
      SELECT * FROM coffee
      WHERE availability = TRUE 
      ORDER BY id DESC LIMIT 3;`;
    const result = await client.query(sql);
    return result.rows;
  },
  //Function to retrieve all characteristics
  getAllCharcteristics: async () => {
    const sql = `SELECT characteristic FROM coffee GROUP BY characteristic; `;
    const result = await client.query(sql);
    return result.rows;
  },
  //Function to retrieve all products
  getAllCoffees: async () => {
    const sql = `SELECT * FROM coffee  ORDER BY availability DESC, id DESC;`;
    const result = await client.query(sql);
    return result.rows;
  },
  //Function to retrieve all products with one characteristic
  getCoffeesByCategory: async (category) => {
    const sql = `SELECT * FROM coffee WHERE LOWER(characteristic) = '${category}' ORDER BY availability DESC, id DESC;`;
    const result = await client.query(sql);
    return result.rows;
  },
  //Function to retrieve one product with his ID
  getOneCoffeeById: async (id) => {
    const sql = `SELECT * FROM coffee WHERE id = ${id};`;
    const result = await client.query(sql);
    return result.rows[0];
  },
  //Function to add a user after sending an email
  addUser: async (body) => {
    const sql = `
      INSERT INTO "contact"
      ( firstname, lastname, email, subject, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `;
    const data = [
      body.firstname,
      body.lastname,
      body.email,
      body.subject,
      body.message,
    ];
    const result = await client.query(sql, data);
  },
  //Function to check if the user name and the password are corrects
  checkAuth: async (keys) => {
    const sql = `
      SELECT log_authorisation FROM "administration"
      WHERE '${keys[0]}' = LOWER(user_name) 
      AND '${keys[1]}' = LOWER(password) 
    `;
    const result = await client.query(sql);
    return result.rows[0].log_authorisation;
  },
  //Function to add a product
  addProduct: async (body) => {
    const sql = `
    INSERT INTO "coffee"
      ( name, description, reference, origin, price, characteristic, availability, alt_txt)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
      `;

    const data = [
      body.name,
      body.description,
      body.reference,
      body.origin,
      body.price,
      body.characteristic,
      body.availability,
      body.alt_txt,
    ];
    const result = await client.query(sql, data);
  },
};

module.exports = dataMapper;
