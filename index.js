import express from 'express';

const app = express()
const port = 3000;

app.get('/',(request,response) => {
    response.send('Node and express server is running on port ${port}');
});

app.listen(PORT, () =>{
    console.log('Your server is running on port ${port}');
});