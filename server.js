const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
