const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const customerRouter = require('./routes/customerForm');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/customer', customerRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});