const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('Welcome');
});





app.listen(3001, () => {
    console.log("Server listening on 3001");
});