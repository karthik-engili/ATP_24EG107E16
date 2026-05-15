# Week 7 Assignments - MERN Capstone: Full-Stack Blog Application

## Overview

Week 7 is the capstone project — a complete full-stack MERN Blog Application inspired by Wattpad, where users can read articles and authors can publish content. This is a comprehensive full-stack project demonstrating production-ready architecture, role-based access control, and modern web technologies.

## Project Structure

```
week_7_assignments/
├── README.md
└── blogApp/
    ├── BLOG-APP-BACKEND/
    │   ├── server.js
    │   ├── package.json
    │   ├── .env
    │   ├── APIs/
    │   ├── models/
    │   ├── middlewares/
    │   ├── config/
    │   └── *.http (test files)
    └── BLOG-APP-FRONTEND/
        ├── src/
        ├── package.json
        ├── vite.config.js
        ├── .env
        └── index.html
```

## Backend - Express.js + MongoDB

The `BLOG-APP-BACKEND` folder contains a well-organized Express.js backend:
- **Entry Point**: `server.js`
- **APIs**: Route handlers for User, Author, and Admin roles in `APIs/` folder
- **Models**: Mongoose schemas (User, Article) in `models/` folder
- **Authentication**: JWT-based middleware in `middlewares/` folder
- **Database**: MongoDB connection configuration in `config/` folder
- **Testing**: HTTP test files (`admin-req.http`, `author-req.http`, `user-req.http`)

**Features**:
- Role-based access control (USER, AUTHOR, ADMIN)
- JWT authentication with cookie storage
- Bcryptjs password hashing
- Cloudinary integration for image uploads
- Soft-delete functionality for articles
- Article categories (Fiction, Fantasy, Thriller, etc.)

## Frontend - React + Vite

The `BLOG-APP-FRONTEND` folder is a modern React application:
- **Build Tool**: Vite v8.0+
- **Framework**: React v19.2.4
- **State Management**: Zustand for global state
- **Routing**: React Router v7
- **Forms**: React Hook Form for user input
- **Notifications**: React Hot Toast
- **Styling**: Tailwind CSS v4
- **API Client**: Axios

**Pages**:
- User authentication (login/register)
- Article listing and reading
- Author dashboard for publishing/editing articles
- Article management with soft-delete
- Category-based filtering

## Prerequisites

- **Node.js** and npm installed
- **MongoDB** server running locally or accessible remotely
- **Cloudinary Account** (for image uploads) - optional for local testing

## Setup and Run Commands

### Step 1: Start MongoDB

Ensure MongoDB is running:

```bash
# If MongoDB is installed locally
mongosh

# Or use MongoDB Atlas - update DB_URL in backend .env
```

### Step 2: Setup Backend

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_7_assignments\blogApp\BLOG-APP-BACKEND"
npm install
node server.js
```

**Expected Output**:
```
Server running on port 4000
Database connected to MongoDB
```

Backend will be available at `http://localhost:4000`

### Step 3: Setup Frontend (in a new terminal)

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_7_assignments\blogApp\BLOG-APP-FRONTEND"
npm install
npm run dev
```

**Expected Output**:
```
VITE v8.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

Frontend will be available at `http://localhost:5173`

## Environment Variables

### Backend (.env)

Located in `BLOG-APP-BACKEND/.env`:

```env
PORT=4000
DB_URL=mongodb://localhost:27017/BlogAppDB
SECRET_KEY=1q2w3e4r5t6y7u8i9o0p

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Note**: Update `CLOUDINARY_*` values with your own credentials for image uploads.

### Frontend (.env)

Located in `BLOG-APP-FRONTEND/.env`:

```env
VITE_API_URL=http://localhost:4000
```

## Available Backend Scripts

```bash
npm start     # Start backend server (alias for node server.js)
```

## Available Frontend Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run lint    # Run ESLint
npm run preview # Preview production build
```

## Testing Backend APIs

The backend includes HTTP test files that can be used with VS Code REST Client extension:

```bash
# Test files available:
user-req.http        # User authentication and profile endpoints
author-req.http      # Author article management endpoints
admin-req.http       # Admin dashboard endpoints
```

## Quick Start (Complete)

### Terminal 1: MongoDB

```bash
# Ensure MongoDB is running (if using local installation)
mongosh
```

### Terminal 2: Backend

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_7_assignments\blogApp\BLOG-APP-BACKEND"
npm install
node server.js
```

### Terminal 3: Frontend

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_7_assignments\blogApp\BLOG-APP-FRONTEND"
npm install
npm run dev
```

### Step 4: Access Application

Open your browser and navigate to:

```
http://localhost:5173
```

## Troubleshooting

### Backend won't start
- Check MongoDB is running: `mongosh`
- Verify PORT 4000 is not in use
- Check `.env` file has correct MongoDB URL

### Frontend won't connect
- Verify backend is running on port 4000
- Check `VITE_API_URL` in `.env` matches backend port
- Check browser console for CORS errors

### Image uploads not working
- Add your Cloudinary credentials to backend `.env`
- Verify Cloudinary account is active

## Project Flow

1. **User Registration/Login**: Create account as USER or AUTHOR
2. **Author**: Publish articles in various categories
3. **User**: Browse and read articles
4. **Admin**: Manage users and moderate content
5. **Frontend**: Connects to backend APIs for all operations

## Key Features Summary

 User authentication with JWT
 Role-based access control (USER, AUTHOR, ADMIN)
 Article CRUD operations
 Image upload with Cloudinary
 Category-based filtering
 Responsive React UI with Tailwind CSS
 Modern state management with Zustand
 Form validation with React Hook Form
 Toast notifications for user feedback

## Notes

- `npm install` is only needed once or when `node_modules/` is missing
- Keep all three terminals running (MongoDB, backend, frontend) for full functionality
- Each project can be updated independently
- Backend API documentation available in `*.http` test files
- Frontend components are modular and reusable