const express = require('express');
const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

app.get('/', (req, res) => {
  res.send("🛒 Welcome to Tushar's Mini E-Commerce Store");
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// webhook test
// webhook test
// webhook trigger
//pipeline test
// webhook test 3
