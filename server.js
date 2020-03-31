const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

//const items = require('./routes/api/items');

const app = express();
const URI = process.env.ATLAS_URI;

mongoose
  .connect('mongodb://localhost/FuelRate', {
    useNewUrlParer: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use routes

//app.use('/api/items', require('./routes/api/items'));

// process.env.PORT is used if we deploy the website
//else
const PORT = process.env.PORT || 3000;
//Doing middleware here
app.use(express.json({ extended: false }));
app.get('/', (request, response) => {
  response.send(`Node and express server is running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());
//Defining the routes

app.use('/api/forum', require('./routes/api/forum'));
app.use('/api/history', require('./routes/api/history'));

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
