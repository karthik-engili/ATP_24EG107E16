# Week 6 Assignments - React State Management, Context API & MERN

## Overview

Week 6 covers advanced React patterns including state management with hooks, Context API for global state, and building a complete MERN stack application. Projects progress from local state to global context to full-stack client-server architecture.

## Folder Structure

- `contextCounter/` - React Context API counter app
- `counterStateWithSyncContextStore/` - Advanced state management with context store pattern
- `userCountReact/` - User count tracker using useState and useEffect
- `userFormWithDynamicTable/` - User form with React Hook Form and dynamic table display
- `mernMiniEmployeeApp/` - Full-stack MERN employee management system

## Project Descriptions

### contextCounter
- **Tech**: React, Vite, Context API, Tailwind CSS
- **Features**: Global counter state using React Context, multiple components share state
- **Setup**: `npm install` → `npm run dev`

### counterStateWithSyncContextStore
- **Tech**: React, Vite, Context API with synchronized store pattern, Tailwind CSS
- **Features**: Advanced state management combining React state and Context
- **Setup**: `npm install` → `npm run dev`

### userCountReact
- **Tech**: React, Vite, Hooks (useState, useEffect), Tailwind CSS
- **Features**: User count tracking with component lifecycle management
- **Setup**: `npm install` → `npm run dev`

### userFormWithDynamicTable
- **Tech**: React, Vite, React Hook Form, Tailwind CSS
- **Features**: User registration form with live table updates, controlled components
- **Setup**: `npm install` → `npm run dev`

### mernMiniEmployeeApp
- **Tech**: Full MERN stack (MongoDB, Express, React, Node.js)
- **Structure**: Separate `backend/` and `frontend/` directories
- **Features**: Employee CRUD operations with backend API and React frontend
- **Setup**: Requires MongoDB, separate setup for backend and frontend

## Setup and Run Commands

### General Setup

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_6_assignments"
```

### React Apps (contextCounter, counterStateWithSyncContextStore, userCountReact, userFormWithDynamicTable)

Each React app follows the same setup pattern:

```bash
cd contextCounter
npm install
npm run dev
```

Repeat for each project:
- `counterStateWithSyncContextStore`
- `userCountReact`
- `userFormWithDynamicTable`

Each will start on a different port (typically 5173, 5174, 5175, 5176, etc.).

#### Available Scripts

For each React project:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### MERN Employee App

This is a full-stack application with separate backend and frontend.

#### Prerequisites

- Node.js and npm installed
- MongoDB server running locally or accessible remotely

#### Step 1: Start MongoDB

Ensure MongoDB is running on `mongodb://localhost:27017` or update `.env` in the backend.

#### Step 2: Setup Backend

```bash
cd mernMiniEmployeeApp/backend
npm install
node server.js
```

The backend will start on port `4000` (configured in `.env`).

#### Step 3: Setup Frontend (in a new terminal)

```bash
cd mernMiniEmployeeApp/frontend
npm install
npm run dev
```

The frontend will start on port `5173` (or the next available port).

#### Backend Environment Variables

Located in `mernMiniEmployeeApp/backend/.env`:

```env
PORT=4000
DB_URL=mongodb://localhost:27017/employeedb
```

Update `DB_URL` if your MongoDB server is on a different host or port.

#### Backend API Endpoints

The backend provides REST API endpoints (typically `http://localhost:4000/api/...`). The React frontend will connect to these endpoints using axios.

## Quick Start Summary

### All React Apps

```bash
# Terminal 1
cd contextCounter
npm install && npm run dev

# Terminal 2 (for a different app)
cd counterStateWithSyncContextStore
npm install && npm run dev
```

### MERN Employee App

```bash
# Terminal 1: Start MongoDB (if not already running)
# MongoDB should be accessible

# Terminal 2: Start backend
cd mernMiniEmployeeApp/backend
npm install
node server.js

# Terminal 3: Start frontend
cd mernMiniEmployeeApp/frontend
npm install
npm run dev
```

## Running Multiple Projects

- Each Vite project needs its own terminal
- Vite automatically assigns different ports if one is in use
- MERN app needs separate terminals for backend and frontend

## Notes

- `npm install` is only needed once per project or when `node_modules/` is missing
- All React apps are built with Vite and use `npm run dev` to start
- The MERN backend requires MongoDB to be running
- Frontend connects to backend via API calls (configured in frontend environment or axios config)
- Use `.env` files in each project to manage configuration

## Recommended Files to View

- `contextCounter/src/contexts/` - Context API implementation
- `counterStateWithSyncContextStore/src/` - Store pattern with context
- `userFormWithDynamicTable/src/components/` - Form and table components
- `mernMiniEmployeeApp/backend/server.js` - Express server setup
- `mernMiniEmployeeApp/frontend/src/` - React frontend components

