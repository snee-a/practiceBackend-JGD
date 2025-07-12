# 🛒 Top Products Aggregator API

A full-stack-ready backend microservice that aggregates product data from multiple external e-commerce APIs and exposes RESTful endpoints with powerful filtering, sorting, pagination, and product detail retrieval.

---

**LINKS**-
## to checkout all products : https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products

**Filter Links-**

✅ ON THE BASIS OF PRICE
Get products with price ≥ 100
👉 /categories/all/products?minPrice=100

Get products with price ≤ 500
👉 /categories/all/products?maxPrice=500

Get products with price between 100 and 500
👉 /categories/all/products?minPrice=100&maxPrice=500

⭐ ON THE BASIS OF RATINGS
Get products with rating ≥ 4
👉 /categories/all/products?rating=4

🎁 ON THE BASIS OF DISCOUNT
Get products with discount ≥ 20%
👉 /categories/all/products?discount=20

📦 ON THE BASIS OF AVAILABILITY
Get only available products
👉 /categories/all/products?availability=true

Get only unavailable products
👉 /categories/all/products?availability=false

📊 ON THE BASIS OF SORTING
Sort by price (low to high)
👉 /categories/all/products?sort=price

Sort by rating (high to low)
👉 /categories/all/products?sort=rating

Sort by discount (high to low)
👉 /categories/all/products?sort=discount

📄 ON THE BASIS OF PAGINATION
Page 1 with 5 products per page
👉 /categories/all/products?n=5&page=1

Page 2 with 5 products per page
👉 /categories/all/products?n=5&page=2

🔗 COMBINED FILTERS
Available products with rating ≥ 4, discount ≥ 15%, sorted by price
👉 /categories/all/products?availability=true&rating=4&discount=15&sort=price






## 🚀 Features

- ✅ Aggregates product data from **5 public APIs**
- ✅ REST API to get top products by category
- ✅ Supports:
  - Filtering (price, rating, discount, availability)
  - Sorting (by price, rating, discount)
  - Pagination (with customizable `n` and `page`)
- ✅ Unique product ID generation
- ✅ Detailed product view via `/productId`
- ✅ Clean modular structure with controllers, routes, and utils

---

## 🏗️ Technologies Used

- Node.js
- Express.js
- Axios
- JavaScript (ES6+)
- CORS (Cross-Origin Resource Sharing)

---

## 📦 API Endpoints

### 1. 🔍 Get Top Products in Category

```http
GET /categories/:categoryName/products
