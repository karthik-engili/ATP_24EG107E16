MERN Employee App – Backend
The Express.js REST API backend for the MERN Mini Employee App. Connects to MongoDB via Mongoose and exposes full CRUD endpoints for employee records.

Folder Structure
backend/
├── APIs/
│   └── EmployeeAPIs.js   # Route handlers for employee CRUD
├── models/
│   └── EmployeeModel.js  # Mongoose schema and model
├── server.js             # App entry point
├── .env                  # Environment variables
├── req.http              # HTTP test requests (REST Client)
└── package.json
