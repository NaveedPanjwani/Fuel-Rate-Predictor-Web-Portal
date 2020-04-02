const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = require('mongodb')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://MubashirKhan:softwaredesign2020@sdcluster-o0sio.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
  })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));


app.use('/user', require('./routes/api/user'));
app.use('/profile', require('./routes/api/profile'));



app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});