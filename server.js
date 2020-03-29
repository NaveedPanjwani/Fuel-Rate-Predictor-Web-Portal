const express = require('express');

const app = express();
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
