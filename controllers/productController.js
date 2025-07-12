const { fetchAllProducts } = require("../utils/fetchFromExternal");

function filterAndSort(products, query) {
  const { minPrice, maxPrice, sort, rating, discount, availability } = query;

  if (minPrice) products = products.filter(p => p.price >= +minPrice);
  if (maxPrice) products = products.filter(p => p.price <= +maxPrice);
  if (rating) products = products.filter(p => p.rating >= +rating);
  if (discount) products = products.filter(p => p.discount >= +discount);
  if (availability) products = products.filter(p => p.availability === (availability === "true"));

  if (sort === "price") products.sort((a, b) => a.price - b.price);
  else if (sort === "rating") products.sort((a, b) => b.rating - a.rating);
  else if (sort === "discount") products.sort((a, b) => b.discount - a.discount);

  return products;
}

const getProducts = async (req, res) => {
  const { categoryName } = req.params;
  let { n, page = 1 } = req.query;

  let products = await fetchAllProducts(categoryName);
  products = filterAndSort(products, req.query);

  // If `n` is not provided, return full product list
  if (!n) {
    return res.json(products);
  }

  n = parseInt(n);
  page = parseInt(page);

  const start = (page - 1) * n;
  const end = start + n;
  const paginated = products.slice(start, end);

  res.json(paginated);
};

const getProductById = async (req, res) => {
  const { categoryName, productId } = req.params;
  const products = await fetchAllProducts(categoryName);
  const found = products.find(p => p.id === productId);

  if (found) return res.json(found);
  res.status(404).json({ message: "Product not found" });
};

module.exports = {
  getProducts,
  getProductById,
};
