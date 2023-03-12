const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('Welcome to home page!');
});





app.listen(3001, () => {
    console.log("Server listening on 300sssss1");
});