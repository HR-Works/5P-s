const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CloudNest Node.js microservice!');
});

app.listen(port, () => {
  console.log(`Microservice is running on port ${port}`);
});