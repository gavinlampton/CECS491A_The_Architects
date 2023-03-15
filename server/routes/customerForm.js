const express = require("express");
const conn = require("../database");

const router = express.Router();

router.post("/", (req, res) => {
  const { first, last, email, phone, saleNotifications, stockNotifications } =
    req.body;

  // Insert customer data into the database
  const sql = `INSERT INTO customer (first_name, last_name, email, phone_number, sale_notification, newstock_notification)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [
    first,
    last,
    email,
    phone,
    saleNotifications,
    stockNotifications,
  ];
  conn.query(sql, values, (err, result) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Error saving customer data to database");
    } else {
      console.log(`Customer data saved to database with ID ${result.insertId}`);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
