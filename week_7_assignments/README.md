# Week 7 - MERN Capstone: Full-Stack Blog Application

This week is the capstone project — a complete full-stack MERN Blog Application inspired by Wattpad, where users can read articles and authors can publish content.

The `BLOG-APP-BACKEND` folder contains the Express.js + MongoDB backend with a well-organized architecture: `server.js` as the entry point, `APIs` folder with route handlers for User, Author, and Admin roles, `models` for Mongoose schemas (User and Article), `middlewares` for JWT-based authentication, and `config` for database connection setup. HTTP test files (`admin-req.http`, `author-req.http`, `user-req.http`) are included for API testing.

The `BLOG-APP-FRONTEND` folder is a Vite + React application that provides the user interface for the blog platform. It includes component-based pages for reading articles, author dashboards for publishing/editing content, and user authentication flows — all styled and routed using React Router.

The backend implements role-based access control (USER, AUTHOR, ADMIN) with JWT cookies, bcrypt password hashing, and soft-delete functionality for articles. Authors can create, edit, and delete articles across categories like Fiction, Fantasy, Thriller, and more, while users can read and comment on published articles.

This project demonstrates end-to-end full-stack development skills including RESTful API design, database modeling, authentication/authorization, and modern React frontend architecture.