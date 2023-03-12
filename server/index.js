const express = require('express');
const app = express();
const mysql = require('mysql2');
const conn = require('./database');

app.get("/", (req, res) => {
    res.send('Welcome to home page!');
});





app.listen(3001, () => {
    console.log("Server listening on 3001");
});