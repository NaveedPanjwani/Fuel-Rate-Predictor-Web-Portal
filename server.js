const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const items = require('./routes/api/items');

const app = express();
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/FuelRate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
//Defining the routes

app.use('/api/forum', require('./routes/api/forum'));
app.use('/api/history', require('./routes/api/history'));

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
