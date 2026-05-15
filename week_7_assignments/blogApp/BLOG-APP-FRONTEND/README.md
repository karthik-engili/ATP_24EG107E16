# Blog App Frontend - React + Vite

## Overview

This is the frontend application for the Week 7 MERN Capstone Blog Application. It provides a modern, responsive user interface built with React and Vite, featuring user authentication, article browsing, and author dashboards.

## Tech Stack

- **Framework**: React v19.2.4
- **Build Tool**: Vite v8.0.1
- **Styling**: Tailwind CSS v4.2.2 with Vite plugin
- **Routing**: React Router v7.13.2
- **State Management**: Zustand v5.0.12
- **Forms**: React Hook Form v7.72.0
- **API Client**: Axios v1.14.0
- **UI Notifications**: React Hot Toast v2.6.0
- **Linting**: ESLint v9.39.4

## Project Structure

```
BLOG-APP-FRONTEND/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ArticleCard.jsx
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── ...
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ArticleDetail.jsx
│   │   ├── AuthorDashboard.jsx
│   │   └── AdminPanel.jsx
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.js
│   │   └── useArticles.js
│   ├── store/                # Zustand global state
│   │   ├── authStore.js
│   │   └── articleStore.js
│   ├── api/                  # API integration
│   │   ├── axiosConfig.js
│   │   ├── userAPI.js
│   │   ├── articleAPI.js
│   │   └── adminAPI.js
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # React entry point
│   └── style.css             # Global styles
├── public/                    # Static assets
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── .env                       # Environment variables
├── tailwind.config.js        # Tailwind CSS config
└── index.html                # HTML entry point
```

## Prerequisites

- **Node.js** (v14 or higher) and npm installed
- **Backend Server** running on `http://localhost:4000`

## Installation

### Step 1: Install Dependencies

```bash
cd BLOG-APP-FRONTEND
npm install
```

This installs all packages including React, Vite, Tailwind CSS, and other dependencies.

### Step 2: Configure Environment Variables

Create or update the `.env` file:

```env
VITE_API_URL=http://localhost:4000
```

**Configuration Details**:
- `VITE_API_URL`: Backend server URL where the frontend makes API calls
  - Development: `http://localhost:4000`
  - Production: `https://your-backend-domain.com`

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected Output**:
```
VITE v8.x.x  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

Frontend will be available at `http://localhost:5173`

## Available Scripts

### Development

```bash
npm run dev
```

Starts Vite development server with hot module replacement (HMR). Changes are reflected instantly without page refresh.

### Build for Production

```bash
npm run build
```

Builds the application for production:
- Optimizes and minifies code
- Generates optimized CSS bundles
- Creates `dist/` folder with production-ready files

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and style.

## Project Features

### User Authentication
- User Registration (email, password, name, role selection)
- User Login with JWT token storage
- Persistent login using cookies
- Logout functionality
- Protected routes for authenticated users

### Article Management
- Browse all published articles
- Filter articles by category (Fiction, Fantasy, Thriller, etc.)
- View article details with author information
- Search articles by title or author
- Pagination support for large article lists

### Author Features (AUTHOR role)
- Create new articles with title, content, category, and image
- Edit existing articles
- Delete articles (soft delete with recovery)
- Author dashboard showing published and draft articles
- View article statistics (views, likes, comments)
- Manage article categories and tags

### User Features (USER role)
- Read articles
- Comment on articles
- Like/bookmark articles
- View author profiles
- Update user profile
- Follow favorite authors

### Admin Features (ADMIN role)
- User management (view, delete users)
- Article moderation (approve, reject, remove inappropriate content)
- Dashboard with platform statistics
- Category management
- Report management

## State Management with Zustand

The application uses Zustand for lightweight global state management:

### Auth Store

```javascript
// src/store/authStore.js
const useAuthStore = create((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
  isAuthenticated: () => state.user !== null
}))
```

### Article Store

```javascript
// src/store/articleStore.js
const useArticleStore = create((set) => ({
  articles: [],
  filteredArticles: [],
  setArticles: (articles) => set({ articles }),
  filterByCategory: (category) => { /* ... */ }
}))
```

## API Integration

### Axios Configuration

```javascript
// src/api/axiosConfig.js
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true  // For cookie-based auth
})
```

### API Endpoints

#### User APIs
```javascript
POST   /api/user/register       // User registration
POST   /api/user/login          // User login
POST   /api/user/logout         // User logout
GET    /api/user/profile        // Get user profile
PUT    /api/user/profile        // Update user profile
GET    /api/user/articles       // Get all articles
GET    /api/user/articles/:id   // Get single article
```

#### Author APIs
```javascript
POST   /api/author/articles         // Create article
GET    /api/author/my-articles      // Get author's articles
PUT    /api/author/articles/:id     // Update article
DELETE /api/author/articles/:id     // Delete article
GET    /api/author/articles/:id     // Get article details
```

#### Admin APIs
```javascript
GET    /api/admin/users             // Get all users
DELETE /api/admin/users/:id         // Delete user
PUT    /api/admin/articles/:id      // Approve/reject article
```

## Form Validation with React Hook Form

The application uses React Hook Form for efficient form handling:

```javascript
// Example: Login Form
import { useForm } from 'react-hook-form'

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = async (data) => {
    // Send login request
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: 'Email required' })} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  )
}
```

## Styling with Tailwind CSS

The application uses Tailwind CSS for utility-first styling:

```javascript
// Example Component
function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Read More
      </button>
    </div>
  )
}
```

## Routing with React Router

The application uses React Router v7 for navigation:

```javascript
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/author/dashboard" element={<ProtectedRoute><AuthorDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Environment Configuration

### Development

```env
VITE_API_URL=http://localhost:4000
VITE_DEBUG=true
```

### Production

```env
VITE_API_URL=https://api.yourblog.com
VITE_DEBUG=false
```

## Quick Start

### Prerequisites
- Backend running on `http://localhost:4000`
- Node.js and npm installed

### Setup

```bash
# Navigate to frontend directory
cd BLOG-APP-FRONTEND

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access Application

Open your browser and go to:
```
http://localhost:5173
```

## Building for Production

```bash
# Create optimized production build
npm run build

# Output will be in dist/ folder
# Files ready for deployment
```

## Troubleshooting

### Backend Connection Error

```
Error: Cannot reach http://localhost:4000
```

**Solution**:
- Verify backend is running: `node server.js` in backend folder
- Check `VITE_API_URL` in `.env` matches backend URL
- Check for CORS errors in browser console

### Port 5173 Already in Use

```
Error: EADDRINUSE: address already in use :::5173
```

**Solution**:
```bash
# Vite will automatically use next available port
# Or specify a custom port
npm run dev -- --port 3000
```

### Hot Module Replacement (HMR) Issues

```
Error: Failed to establish a WebSocket connection
```

**Solution**:
- Check firewall settings
- Restart dev server: `npm run dev`
- Clear browser cache

### Import Errors

```
Error: Failed to resolve module
```

**Solution**:
- Run `npm install` again
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` from scratch

## Development Tips

### React DevTools
- Install React DevTools browser extension for debugging
- Inspect component props and state in real-time

### Vite Dev Server
- Fast HMR for instant updates during development
- Use `npm run dev` for best development experience
- No need to manually refresh browser

### ESLint
- Run `npm run lint` to check code quality
- Fix common issues automatically (if supported)
- Follow coding standards for consistency

### Browser DevTools
- Open `http://localhost:5173` in browser
- Use F12 or Ctrl+Shift+I to open DevTools
- Check Network tab for API calls
- Check Console for errors and warnings

## Performance Optimization

- Lazy loading of routes with React Router
- Code splitting with Vite
- Image optimization with Cloudinary
- CSS purging with Tailwind CSS
- Minification in production build

## Next Steps

1. Ensure backend is running on port 4000
2. Update `.env` with correct backend URL
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to start the development server
5. Open `http://localhost:5173` in your browser
6. Test authentication and article features
7. Review component files in `src/` folder
8. Customize styling with Tailwind CSS

## Support

For issues or questions:
- Check the troubleshooting section above
- Verify backend is running
- Check browser console for errors
- Review `.env` configuration
- Consult React and Vite documentation
