# Blog App Backend - Express.js + MongoDB

## Overview

This is the backend server for the Week 7 MERN Capstone Blog Application. It provides REST APIs for user authentication, article management, and role-based access control.

## Tech Stack

- **Framework**: Express.js v5.2.1
- **Database**: MongoDB v9.3.0 with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken v9.0.3) with cookie-based storage
- **Security**: Bcryptjs v3.0.3 for password hashing
- **File Upload**: Cloudinary v2.9.0 for image storage
- **File Handling**: Multer v2.1.1 for file uploads
- **CORS**: Enabled for frontend communication
- **Environment**: Dotenv v17.3.1 for configuration
- **Cookie Parser**: cookie-parser v1.4.7 for JWT cookies

## Project Structure

```
BLOG-APP-BACKEND/
├── server.js                 # Entry point
├── package.json              # Dependencies
├── .env                       # Environment configuration
├── APIs/                      # Route handlers
│   ├── user/
│   ├── author/
│   └── admin/
├── models/                    # Mongoose schemas
│   ├── User.js
│   └── Article.js
├── middlewares/               # Custom middleware
│   ├── auth.js               # JWT authentication
│   ├── errorHandler.js       # Error handling
│   └── roleCheck.js          # Role verification
├── config/                    # Database connection
│   └── database.js
└── *.http                     # API test files
    ├── user-req.http
    ├── author-req.http
    └── admin-req.http
```

## Prerequisites

- **Node.js** (v14 or higher) and npm installed
- **MongoDB** running locally or on MongoDB Atlas
- **Cloudinary Account** (optional, for image uploads)

## Installation

### Step 1: Install Dependencies

```bash
cd BLOG-APP-BACKEND
npm install
```

This installs all packages listed in `package.json`.

### Step 2: Configure Environment Variables

Create or update the `.env` file:

```env
PORT=4000
DB_URL=mongodb://localhost:27017/BlogAppDB
SECRET_KEY=your_secret_key_here

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Configuration Details**:
- `PORT`: Server port (default 4000)
- `DB_URL`: MongoDB connection string
  - Local: `mongodb://localhost:27017/BlogAppDB`
  - MongoDB Atlas: `mongodb+srv://user:password@cluster.mongodb.net/BlogAppDB`
- `SECRET_KEY`: JWT secret for token signing
- `CLOUDINARY_*`: Image storage credentials (optional)

### Step 3: Start MongoDB

**Option A: Local MongoDB**

```bash
mongosh
```

**Option B: MongoDB Atlas (Cloud)**

Update `DB_URL` in `.env` with your connection string from MongoDB Atlas dashboard.

### Step 4: Start Backend Server

```bash
node server.js
```

**Expected Output**:
```
Server running on port 4000
Database connected successfully
```

## Running the Server

### Development Mode

```bash
node server.js
```

Server will start on `http://localhost:4000`

### Using npm Script

```bash
npm start
```

This runs `node server.js` as defined in `package.json`.

## API Documentation

### Authentication Endpoints

**User Registration** (Public)
```
POST /api/user/register
Body: { email, password, name, role }
Response: { token, user }
```

**User Login** (Public)
```
POST /api/user/login
Body: { email, password }
Response: { token, user }
```

**User Logout** (Protected)
```
POST /api/user/logout
Headers: Authorization: Bearer <token>
```

### User Endpoints (Protected - USER role)

**Get User Profile**
```
GET /api/user/profile
Headers: Authorization: Bearer <token>
```

**Update User Profile**
```
PUT /api/user/profile
Headers: Authorization: Bearer <token>
Body: { name, bio, avatar }
```

**Get All Articles** (Public)
```
GET /api/user/articles
Query: ?category=Fiction&page=1&limit=10
```

**Get Single Article** (Public)
```
GET /api/user/articles/:id
```

### Author Endpoints (Protected - AUTHOR role)

**Create Article**
```
POST /api/author/articles
Headers: Authorization: Bearer <token>
Body: { title, content, category, image }
```

**Update Article**
```
PUT /api/author/articles/:id
Headers: Authorization: Bearer <token>
Body: { title, content, category, image }
```

**Delete Article**
```
DELETE /api/author/articles/:id
Headers: Authorization: Bearer <token>
```

**Get Author's Articles**
```
GET /api/author/my-articles
Headers: Authorization: Bearer <token>
```

### Admin Endpoints (Protected - ADMIN role)

**Get All Users**
```
GET /api/admin/users
Headers: Authorization: Bearer <token>
```

**Approve Article**
```
PUT /api/admin/articles/:id/approve
Headers: Authorization: Bearer <token>
```

**Delete User**
```
DELETE /api/admin/users/:id
Headers: Authorization: Bearer <token>
```

## Testing APIs

### Using REST Client Extension

The project includes `.http` test files for VS Code REST Client extension:

```bash
# Open any of these files in VS Code and click "Send Request"
user-req.http      # User authentication and profile tests
author-req.http    # Author article management tests
admin-req.http     # Admin user management tests
```

### Using cURL

**Register User**
```bash
curl -X POST http://localhost:4000/api/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "role": "USER"
  }'
```

**Login User**
```bash
curl -X POST http://localhost:4000/api/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**Create Article (with token)**
```bash
curl -X POST http://localhost:4000/api/author/articles \
  -H "Authorization: Bearer <your_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Article",
    "content": "Article content here...",
    "category": "Fiction"
  }'
```

## Database Schema

### User Model

```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  name: String,
  role: String (USER|AUTHOR|ADMIN),
  bio: String,
  avatar: String (Cloudinary URL),
  createdAt: Date,
  updatedAt: Date
}
```

### Article Model

```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  category: String,
  image: String (Cloudinary URL),
  author: ObjectId (ref: User),
  status: String (DRAFT|PUBLISHED|ARCHIVED),
  isDeleted: Boolean (soft delete),
  createdAt: Date,
  updatedAt: Date
}
```

## Middleware

### Authentication Middleware

```javascript
// Usage: router.get('/protected', authenticate, handler)
// Verifies JWT token and attaches user to request
```

### Role-Based Middleware

```javascript
// Usage: router.post('/admin-only', authenticate, authorize('ADMIN'), handler)
// Checks user role before allowing access
```

### Error Handler

```javascript
// Global error handler catches validation errors, cast errors, and custom errors
```

## Features

 User Registration and Authentication
 JWT-based Authorization with Cookie Storage
 Role-Based Access Control (USER, AUTHOR, ADMIN)
 Article CRUD Operations
 Soft Delete for Articles (recovery possible)
 Image Upload to Cloudinary
 Password Hashing with Bcryptjs
 MongoDB Aggregation for Advanced Queries
 CORS Configuration for Frontend Access
 Error Handling and Validation
 Environment-based Configuration

## Troubleshooting

### Connection Error to MongoDB

```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solution**: 
- Start MongoDB: `mongosh`
- Or use MongoDB Atlas and update `DB_URL` in `.env`

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::4000
```

**Solution**:
```bash
# Kill process on port 4000 (Windows)
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Or change PORT in .env
```

### JWT Errors

```
Error: JsonWebTokenError: invalid token
```

**Solution**:
- Verify token is correctly formatted in Authorization header
- Check token expiration
- Verify SECRET_KEY in `.env`

### Image Upload Fails

```
Error: Cloudinary credentials not found
```

**Solution**:
- Add Cloudinary credentials to `.env`
- Or implement local file storage instead

## Environment Configuration

### Local Development

```env
PORT=4000
DB_URL=mongodb://localhost:27017/BlogAppDB
SECRET_KEY=dev_secret_key_123
CLOUDINARY_CLOUD_NAME=optional
CLOUDINARY_API_KEY=optional
CLOUDINARY_API_SECRET=optional
```

### Production (MongoDB Atlas)

```env
PORT=4000
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/BlogAppDB
SECRET_KEY=production_secret_key_very_secure
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Next Steps

1. Ensure MongoDB is running
2. Update `.env` with correct credentials
3. Run `npm install` to install dependencies
4. Run `node server.js` to start the backend
5. Frontend can now connect to backend APIs
6. Use `.http` test files to verify API functionality

## Support

For issues or questions:
- Check the troubleshooting section above
- Review API test files for usage examples
- Verify `.env` configuration is correct
- Ensure MongoDB is running and accessible
