# 🛒 Top Products Aggregator API

A full-stack-ready backend microservice that aggregates product data from multiple external e-commerce APIs and exposes RESTful endpoints with powerful filtering, sorting, pagination, and product detail retrieval.

---

**LINKS**-
## to checkout all products : https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products

**Filter Links-**

---

## ✅ Filter Examples

### Price Filters

- Price ≥ 100  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?minPrice=100

- Price ≤ 500  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?maxPrice=500

- Price between 100 and 500  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?minPrice=100&maxPrice=500

### Rating Filters

- Rating ≥ 4  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?rating=4

### Discount Filters

- Discount ≥ 20%  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?discount=20

### Availability

- Available  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?availability=true

- Unavailable  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?availability=false

### Sorting

- Sort by Price  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?sort=price

- Sort by Rating  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?sort=rating

- Sort by Discount  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?sort=discount

### Pagination

- Page 1 with 5 products  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?n=5&page=1

- Page 2 with 5 products  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?n=5&page=2

---

## 🧠 Combined Filter Example

- Available + rating ≥ 4 + discount ≥ 15 + sort by price  
  https://practice-backend-llaxtuscs-overall-health.vercel.app/categories/all/products?availability=true&rating=4&discount=15&sort=price








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
