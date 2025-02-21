const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/customers', (req, res) => {
  res.send('List of customers');
});

app.post('/customers', (req, res) => {
  const customer = req.body;
  res.send(`Customer ${customer.name} added!`);
});

app.listen(port, () => {
  console.log(`Customer service running on port ${port}`);
});