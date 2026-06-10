# Delivery App

A React + TypeScript food delivery storefront that fetches shops and products, manages a shopping cart, and submits orders.

## 🚀 Features

- Browse shops with pagination
- View products by selected shop
- Filter products by category
- Sort products by name or price
- Add products to cart with quantity controls
- Persist cart state in localStorage
- Submit orders through checkout form
- Responsive UI powered by Vite and React Router

## 🧱 Tech stack

- React 19
- TypeScript
- Vite
- React Router v7
- React Query
- Zustand
- Axios
- Formik + Yup
- react-hot-toast

## 📁 Project structure

- `src/api/` — API client and request helpers
- `src/components/` — reusable UI components
- `src/pages/` — page-level views (`ShopPage`, `CartPage`)
- `src/store/` — Zustand cart store
- `src/types/` — shared data types
- `src/utils/` — utility functions

## ⚙️ Setup

```bash
cd "c:\Users\user\Documents\GoIt projects\delivery-app"
npm install
npm run dev
```

Open the local Vite URL shown in the terminal (usually `http://localhost:5173`).

## 📦 Available scripts

- `npm run dev` — start development server
- `npm run build` — build production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — lint source files with ESLint

## 🌐 Backend API

The app uses a configured backend base URL in `src/api/axios.ts`:

```ts
baseURL: "https://delivery-app-server-oq2h.onrender.com/delivery-app",
```

### Endpoints used

- `GET /delivery-app/shops` — fetch paginated shops
- `GET /delivery-app/products` — fetch paginated products with filters and sorting
- `POST /delivery-app/orders` — submit a new order

## 🛒 Cart behavior

- Uses Zustand with persist middleware
- Saves cart state to `localStorage`
- Restores cart after page reloads
- Supports item quantity changes and removal

## 🛣️ App routes

- `/` — Shop page with shop list, product list, filters, and add-to-cart actions
- `/cart` — Cart page with order form and checkout

## 💡 Notes

- The cart is stored locally and survives refreshes.
- The app relies on the configured backend API.
- To use a different backend, update `src/api/axios.ts`.
