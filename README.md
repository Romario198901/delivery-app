# 🍔 Delivery App

Full-stack food delivery application built with **React, Node.js, Express, MongoDB**.

---

## 🚀 Features

- 🏪 Browse shops
- 🍕 View products by shop
- 🔍 Filtering & sorting
- 🛒 Add to cart (persisted in localStorage)
- ➕ Increase / decrease product quantity
- ❌ Remove items from cart
- 📦 Create order
- 📱 Responsive UI

---

## 🧱 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Query
- Zustand (state + localStorage)
- React Router
- Formik + Yup
- Axios

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- Joi / Celebrate validation

---

## 📂 Project Structure

src/
api/
components/
pages/
store/
types/
utils/


## ⚙️ Installation

### 1. Clone repo

```bash
git clone <your-repo-url>
cd delivery-app

Install dependencies
npm install

 Run frontend
npm run dev

📡 API Endpoints
Shops
GET /delivery-app/shops
Products
GET /delivery-app/products
Orders
POST /delivery-app/orders



📦 Order Payload Example
{
  "customerName": "John Doe",
  "email": "john@example.com",
  "phone": "+380671234567",
  "address": "Kyiv, Ukraine",
  "items": [
    {
      "productId": "6870...",
      "name": "Burger",
      "price": 120,
      "quantity": 2
    }
  ],
  "totalPrice": 240
}


🧠 Architecture
ShopPage — data fetching + filters
ProductList — UI + controls
ProductCard — single product
CartPage — order creation
OrderForm — user data only
zustand — cart state + localStorage
💾 State Management

Cart is stored using Zustand + persist middleware:

Automatically saves to localStorage
Restores state on reload
No manual storage logic needed
🛣 Routing
/        → ShopPage
/cart    → CartPage



⚠️ Known Issues
Images may fallback if URL is invalid
No authentication (by design)
No admin panel
📌 Future Improvements
🔐 Authentication
🧾 Order history
💳 Payment integration
🔎 Search
⭐ Ratings

👨‍💻 Author
Roman Hrydyn

📄 License
MIT