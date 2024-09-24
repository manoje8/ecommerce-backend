## ECommerce Backend

This repository contains the backend code for a E-commerce application. Built with Node.js, Express.js, and MongoDB.

## Tech Stack

### Backend:

- **Node.js:** For building the server-side application.
- **Express.js:** For creating API routes and handling server-side logic.
- **Mongoose:** For interacting with MongoDB and defining models.
- **MongoDB Atlas:** Cloud-based database to store product data.

## API Endpoints

The backend exposes the following REST API endpoints:

- **GET /products**: Fetch all products.
- **GET /products/**: Fetch a single product by ID.
- **GET /products/search?name**: Search products by name.
- **GET /products/category/**: Fetch products by category.

### Installation and Setup

**Prerequisites:**

- Node.js
- npm (Node Package Manager)

**Instructions:**

1. Clone the repository:

```
git clone https://github.com/manoje8/repo-name.git
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev  (OR)
npm start
```

The server will start on port `8000` by default. You can access the application routes in your browser.
