# 🛒 Top Products Aggregator API

A full-stack-ready backend microservice that aggregates product data from multiple external e-commerce APIs and exposes RESTful endpoints with powerful filtering, sorting, pagination, and product detail retrieval.

---

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
