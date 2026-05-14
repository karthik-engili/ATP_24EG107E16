# Backend2 - Express + MongoDB REST API

## Overview

This project is an Express.js backend app with MongoDB integration using Mongoose. It includes:
- User authentication and protected routes
- User CRUD API
- Product CRUD API
- Token-based login with JWT and HTTP-only cookies
- Error handling middleware for validation and casting errors

## Folder Structure

- `server.js` - Main Express server entry point
- `package.json` - Project metadata and dependencies
- `.env` - Environment variables for port, DB URL, and secret key
- `APIs/userAPI.js` - User authentication and user endpoints
- `APIs/productAPI.js` - Product CRUD endpoints
- `auth/` - Authentication-related files (if present)
- `middlewares/verifyToken.js` - JWT verification middleware
- `models/` - Mongoose models for User and Product
- `req.http` - HTTP request examples for manual testing

## Prerequisites

- Node.js installed
- MongoDB server running locally or accessible remotely

## Setup and Run Commands

Open a terminal and run the following commands:

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_3_Assignments\backend2"
npm install
```

If you do not already have a MongoDB server running, start it now.

Then start the backend server:

```bash
node server.js
```

If you want to add a shortcut command, modify `package.json` and then run:

```bash
npm install
npm run start
```

## Environment Variables

The project uses `.env` to store configuration values. Example values are already present in `.env`:

```env
PORT=4000
DB_URL=mongodb://localhost:27017/backend2
SECRET_KEY=your-secret-key-here
```

> Note: The server loads the DB URL and port from `.env` using `dotenv`.

## Important Note

If MongoDB connection fails, verify that `DB_URL` in `.env` is correct and that the app is using:

```js
await connect(process.env.DB_URL)
```

(not a quoted string).

## Available API Routes

### User API
Prefix: `/user-api`

- `POST /user-api/auth`
  - Login with `{ email, password }`
  - Returns HTTP-only cookie with JWT token
- `POST /user-api/users`
  - Create a new user
- `GET /user-api/users`
  - Get all users (protected route)
- `GET /user-api/user`
  - Get current user by token (protected route)
- `PUT /user-api/users/:id`
  - Update user by ID
- `DELETE /user-api/users/:id`
  - Delete user by ID
- `PUT /user-api/cart/product-id/:pid`
  - Add a product to the authenticated user cart (protected route)

### Product API
Prefix: `/product-api`

- `POST /product-api/products`
  - Create a new product
- `GET /product-api/products`
  - Get all products
- `GET /product-api/products/:id`
  - Get product by ID
- `PUT /product-api/products/:id`
  - Update product by ID
- `DELETE /product-api/products/:id`
  - Delete product by ID

## Testing

You can use the included `req.http` file or tools like Postman / REST Client to send requests against:

- `http://localhost:4000/user-api/...`
- `http://localhost:4000/product-api/...`

## Run Flow

1. Install dependencies
2. Start MongoDB server
3. Run `node server.js`
4. Use the API routes to create users, authenticate, and manage products

## Troubleshooting

- If the server does not start, verify Node version and dependencies
- If the DB connection fails, verify `DB_URL` and MongoDB status
- If authentication fails, make sure cookies are enabled for the token response

