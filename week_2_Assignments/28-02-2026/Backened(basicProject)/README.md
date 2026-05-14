# Backend-1: Express.js REST API Server

## Overview

A foundational Express.js backend project demonstrating HTTP server setup, middleware usage, routing, and API organization. This is the first step into Node.js backend development.

## Project Structure

```
Backened-1/
├── server.js              - Main Express server entry point
├── package.json           - Project dependencies and metadata
├── req.http               - HTTP request testing file
├── APIs/
│   ├── userAPI.js        - User-related endpoints
│   └── productAPI.js     - Product-related endpoints
└── node_modules/         - Installed dependencies
```

## Setup Steps

### 1. Initialize Project
```bash
npm init -y
```
Then update `package.json` with:
- `"type": "module"` - Enable ES6 imports/exports
- Update description and main entry point

### 2. Install Dependencies
```bash
npm install express
```

### 3. Create HTTP Server
- Import Express module: `import express from "express"`
- Create app instance: `const app = express()`
- Set port and start listening

## Server Architecture

### Middleware Stack

1. **Body Parser Middleware**
   - `app.use(express.json())` - Converts JSON request bodies to JavaScript objects

2. **Custom Middleware 1**
   - Logs: "middleware1 executed"
   - Calls `next()` to pass control to next middleware

3. **Custom Middleware 2**
   - Logs: "middleware2 executed"
   - Calls `next()` to pass control to routes

### Routes

- `/user-api` - Mounts user API endpoints
- `/product-api` - Mounts product API endpoints

## Features

- **Modular API Design** - Separate API files for different resources
- **Middleware Pattern** - Custom middleware for logging and request processing
- **JSON Support** - Built-in JSON body parsing
- **Port Configuration** - Server runs on port 3000
- **HTTP Testing** - `req.http` file for testing endpoints

## Running the Server

```bash
node server.js
# Output: Server listening on port 3000...
```

## Files Explained

### server.js
- Express app initialization
- Middleware registration
- Route mounting
- Server listening

### APIs/userAPI.js
- User endpoint handlers
- User-related CRUD operations

### APIs/productAPI.js
- Product endpoint handlers
- Product-related CRUD operations

### req.http
- HTTP request examples for testing
- Can be used with REST client extensions like REST Client (VSCode)

## Execution Flow

1. Request arrives at server
2. Body parser middleware converts JSON
3. Custom middleware 1 logs and passes control
4. Custom middleware 2 logs and passes control
5. Route handler processes request
6. Response sent back to client

## Learning Objectives

- Set up an Express.js HTTP server
- Understand middleware execution order
- Organize APIs in separate modules
- Use ES6 modules in Node.js
- Test HTTP endpoints

## Notes

- Middleware executes in the order it's registered
- All middleware must call `next()` to pass control (except the final route handler)
- Make sure to add `"type": "module"` to package.json to use ES6 imports
- Port 3000 can be configured in the `port` variable
        