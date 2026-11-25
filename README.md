# Full-Stack E-Commerce App

A full-stack e-commerce web application with a React storefront and a Node.js/Express REST API. Users can browse products, view product details, and manage a shopping cart that persists across sessions.

<!-- TODO: add a screenshot or short GIF of the home page and cart here -->
<!-- ![Home page](docs/screenshot-home.png) -->

## Features

- Product catalog served from a REST API
- Product details page for each item
- Shopping cart with add, increase, and decrease quantity
- Cart state persisted in `localStorage`, so it survives page reloads
- Centralized state management with Redux Toolkit, including RTK Query for API calls and caching
- Responsive UI built with Material UI (MUI) components and a custom theme
- Client-side routing with a 404 page

## Tech Stack

**Frontend**
- React 19
- Redux Toolkit + RTK Query
- Material UI (MUI) v7
- React Router v7
- Vite

**Backend**
- Node.js
- Express 5
- CORS

## Project Structure

```
├── backend/          # Express REST API (product data)
│   ├── index.js      # API entry point and routes
│   └── products.js   # Product data source
└── frontend/         # React client (Vite)
    └── src/
        ├── pages/        # Home, Details, Cart, NotFound
        ├── redux/        # Store, cart slice, RTK Query API
        └── MUI-components/  # App bar, drawer
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### 1. Run the backend

```bash
cd backend
npm install
npm run dev
```

The API starts on `http://localhost:5000` and exposes:

- `GET /products` - list all products
- `GET /products/:id` - get a single product

### 2. Run the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The app starts on the Vite dev server (default `http://localhost:5173`) and fetches data from the backend on port 5000.

## Roadmap

Planned next steps:

- Move product data to a real database (MongoDB)
- User authentication and saved carts per account
- Checkout flow and order history

## Author

**Hamza Ismail** - [GitHub](https://github.com/HamzaReko)
