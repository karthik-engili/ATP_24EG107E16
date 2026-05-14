# Week 5 Assignments - CSS Layouts, Tailwind, and React

## Overview

Week 5 progresses from responsive CSS layout techniques to modern frontend frameworks. The folder includes:
- static HTML/CSS assignments for Flexbox and tables
- a Tailwind CSS project with Vite
- two React projects built with Vite
- shared image assets

## Folder Structure

- `assets/` - Shared image assets used by the projects
- `flexHandson/` - Static Flexbox layout demo
- `tablesHtmlAndCss/` - Static HTML table styling demo
- `tailwindProject/` - Tailwind CSS project with Vite
- `reactProductAssignment1/` - React product listing app
- `reactUserAssignments2/` - React user management app

## Static HTML/CSS Projects

### `flexHandson`
- Files: `index.html`, `style.css`
- Demonstrates CSS Flexbox layout, element alignment, and responsive design.

### `tablesHtmlAndCss`
- Files: `tableAss.html`, `tableAss.css`
- Demonstrates HTML tables styled with CSS for borders, spacing, and layout.

## Tailwind CSS Project

### `tailwindProject`
- Files: `package.json`, `src/`, `assets/`, `vite.config.js`
- Uses Tailwind CSS with Vite
- Scripts available:
  - `npm run dev` - start development server
  - `npm run build` - build production assets
  - `npm run preview` - preview production build

## React Projects

### `reactProductAssignment1`
- Vite-powered React app for product listing
- Uses React, Tailwind CSS, and JSX
- Scripts available:
  - `npm run dev` - start development server
  - `npm run build` - production build
  - `npm run preview` - preview production build

### `reactUserAssignments2`
- Vite-powered React app for user management
- Uses React, Tailwind CSS, and JSX
- Same script commands as `reactProductAssignment1`

## Setup and Run Commands

### 1. Open the folder

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_5_assignments"
```

### 2. Static HTML/CSS projects

These can be opened directly in a browser.

#### Option A: Open file directly
- Double-click the HTML file in file explorer.
- Example files:
  - `flexHandson/index.html`
  - `tablesHtmlAndCss/tableAss.html`

#### Option B: Use a simple local server

With Node.js:
```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_5_assignments"
npx serve .
```
Then open `http://127.0.0.1:3000/flexHandson/index.html` or `http://127.0.0.1:3000/tablesHtmlAndCss/tableAss.html`.

With Python 3:
```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_5_assignments"
python -m http.server 5500
```
Then open `http://127.0.0.1:5500/flexHandson/index.html`.

### 3. Tailwind project

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_5_assignments\tailwindProject"
npm install
npm run dev
```

Then open the local URL shown in the terminal, typically `http://127.0.0.1:5173`.

To build for production:

```bash
npm run build
npm run preview
```

### 4. React product listing app

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_5_assignments\reactProductAssignment1"
npm install
npm run dev
```

Then open the URL shown in the terminal.

### 5. React user management app

```bash
cd "c:\Programming\Full Stack (ATP)\ATP Assignments\week_5_assignments\reactUserAssignments2"
npm install
npm run dev
```

Then open the URL shown in the terminal.

## Running Multiple Projects

If you want to run multiple Vite projects at once, each must use a different port.
- Vite will prompt to use a new port when the first is already in use.
- For example, accept port `5174` for the second project.

## Notes

- `npm install` is only required once per project or when `node_modules/` is missing.
- The React and Tailwind projects are built with Vite, so `npm run dev` is the standard start command.
- If using VS Code, install the Live Server extension for the static HTML projects.
- The static HTML pages do not need Node.js unless you choose to serve them locally.

## Recommended Files to View

- `flexHandson/index.html`
- `tablesHtmlAndCss/tableAss.html`
- `tailwindProject/src/main.js` or `tailwindProject/index.html`
- `reactProductAssignment1/src/App.jsx`
- `reactUserAssignments2/src/App.jsx`

