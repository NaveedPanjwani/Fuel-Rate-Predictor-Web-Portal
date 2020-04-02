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



/*const MongoClient = mongoose.MongoClient;
const uri = "mongodb+srv://MubashirKhan:softwaredesign2020@sdcluster-o0sio.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = mongoose.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  
});*/

/*client.once('open', () =>{
  console.log('mongoDB is connected');
})*/
app.use('/user', require('./routes/api/user'));


app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});