# Backend Sprint 1 - Completed

**Date Completed:** 21 February 2026
**Developer:** Maksym
**Sprint Focus:** Backend infrastructure setup, database connection, and authentication system

---

## Overview

This document outlines all backend work completed during Sprint 1 while awaiting API documentation from the client. The goal was to build a solid foundation that will not need to be redone once documentation arrives.

---

## Environment Setup

- **VM:** Ubuntu Linux (IP: 10.142.60.57)
- **Node.js:** 18.19.1
- **PostgreSQL:** 16.11
- **Runtime:** Express 5.2.1 with TypeScript (tsx)
- **Server Port:** 5000

---

## Tasks Completed

### 1. VM Environment Setup
- Installed Node.js 18.19.1 and npm on Ubuntu VM
- Confirmed PostgreSQL 16.11 availability
- Cloned GitHub repository to VM

### 2. PostgreSQL Database Setup
- Created database: `engame_dev`
- Created database user: `engame_user`
- Granted all necessary schema permissions
- Verified secure SSL connection

### 3. Backend Project Initialization
- Initialized Node.js project with TypeScript
- Configured ES modules (`"type": "module"` in package.json)
- Resolved ES module compatibility issues (switched from ts-node to tsx)
- Created project structure:
  ```
  backend/
  ├── src/
  │   ├── config/
  │   │   └── database.ts
  │   ├── controllers/
  │   │   └── authController.ts
  │   ├── middleware/
  │   │   └── auth.ts
  │   ├── models/
  │   │   └── user.ts
  │   ├── routes/
  │   │   └── authRoutes.ts
  │   └── server.ts
  ├── .env
  ├── .gitignore
  ├── package.json
  └── tsconfig.json
  ```

### 4. Database Connection
- Created PostgreSQL connection pool (`src/config/database.ts`)
- Verified live connection on server startup
- Environment variables configured via `.env`

### 5. Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. Authentication System
- Implemented register endpoint with duplicate email/username checks
- Implemented login endpoint with bcrypt password verification
- JWT tokens generated on register and login (7 day expiry)
- JWT authentication middleware for protecting routes

### 7. Protected Route Example
- Demonstrated JWT middleware usage with `/api/profile` endpoint
- Tested rejection of requests without valid token

---

## API Endpoints

| Endpoint | Method | Auth Required | Description |
|----------|--------|---------------|-------------|
| `/api/health` | GET | No | Server health check |
| `/api/auth/register` | POST | No | Register new user |
| `/api/auth/login` | POST | No | Login and receive JWT token |
| `/api/profile` | GET | Yes (Bearer token) | Example protected route |

---

## Dependencies

### Production
- `express` ^5.2.1
- `pg` ^8.18.0
- `bcrypt` ^6.0.0
- `jsonwebtoken` ^9.0.3
- `cors` ^2.8.6
- `dotenv` ^17.3.1

### Development
- `typescript` ^5.9.3
- `tsx` (ES module compatible TypeScript runner)
- `@types/express`, `@types/bcrypt`, `@types/cors`, `@types/jsonwebtoken`, `@types/pg`, `@types/node`

---

## What's Next (Pending API Documentation)

- Game-specific database tables and endpoints
- Business logic from client requirements
- Integration with frontend (Dylan)
- Integration with AI implementation (Joe)

---

## Notes

- `.env` file is excluded from Git for security (database credentials and JWT secret)
- All endpoints tested locally with curl
- Code pushed to GitHub main branch
