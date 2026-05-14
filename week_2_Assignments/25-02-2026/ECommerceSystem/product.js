//products list
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" }
];

// function to get product by ID
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// function to get all products
export function getAllProducts() {
  return products;
}

// function to get products by category
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

// function to search product
export function searchProducts(query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

// function to check stock available 
export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return false;
  return product.stock >= quantity;
}

// funciton to reduce staock when items are sold 
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (product) {
    product.stock = product.stock - quantity;
  }
}