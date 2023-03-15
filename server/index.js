const express = require('express');
const cors = require('cors'); 
const app = express();
const mysql = require('mysql2');
const conn = require('./database');

// Use CORS middleware
app.use(cors());

// Parse JSON body in POST requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send('Welcome to home page!');
});

// Handle POST request from the customer form
app.post("/customer", (req, res) => {
  const { first, last, email, phone, saleNotifications, stockNotifications } = req.body;

  // Insert customer data into the database
  const sql = `INSERT INTO customer (first_name, last_name, email, phone_number, sale_notification, newstock_notification)
               VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [first, last, email, phone, saleNotifications, stockNotifications];
  conn.query(sql, values, (err, result) => {
    if (err) {
        console.error(err.message);
      res.status(500).send('Error saving customer data to database');
    } else {
      console.log(`Customer data saved to database with ID ${result.insertId}`);
      res.sendStatus(200);
    }
  });
});

app.listen(3001, () => {
  console.log("Server listening on 3001");
});