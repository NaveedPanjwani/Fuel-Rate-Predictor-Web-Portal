const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const items = require('./routes/api/items');

const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FuelRate',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use routes

//app.use('/api/items', require('./routes/api/items'));



app.get('/',(request,response) => {
    response.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`);
});