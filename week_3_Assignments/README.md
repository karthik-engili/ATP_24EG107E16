# Week 3 - Backend Development with Express, MongoDB & Authentication

This week focuses on building a full-featured backend API using Express.js, MongoDB (via Mongoose), and implementing user authentication with JWT.

The `Backend-2` folder contains a complete Node.js backend application with a well-structured project layout. The `server.js` file sets up an Express server connected to MongoDB, with cookie-parser middleware and route forwarding to separate API modules for users and products.

The `APIs` folder houses the route handlers (`userAPI.js`, `productAPI.js`) implementing RESTful CRUD endpoints. The `models` directory defines Mongoose schemas for structuring database documents, while the `middlewares` folder contains authentication logic using JSON Web Tokens (JWT) and `bcrypt` for password hashing.

The `auth` module handles user registration and login flows, and `req.http` provides ready-made HTTP requests for testing all API endpoints directly. Environment variables are managed via `dotenv` with configurations stored in the `.env` file.

This week's work demonstrates a production-ready backend architecture with proper separation of concerns, secure authentication, and database integration.
