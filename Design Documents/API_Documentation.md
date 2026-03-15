# ENGAME Backend API Documentation

**Version:** 1.0
**Base URL:** `http://10.142.60.57:5000`
**Developer:** Maksym
**Last Updated:** March 2026

---

## Overview

This document describes all available API endpoints for the ENGAME backend. The backend is built with Node.js, Express, TypeScript and PostgreSQL. It provides user authentication using JWT (JSON Web Tokens).

**Frontend Base URL:** `http://localhost:3000`
**Backend Base URL:** `http://localhost:5000`

---

## Authentication

Protected endpoints require a JWT token in the `Authorization` header:

```
Authorization: Bearer <your_token_here>
```

Tokens are obtained by registering or logging in. Tokens expire after **7 days**.

---

## Endpoints

### Health Check

#### `GET /api/health`
Check if the server is running.

**Auth Required:** No

**Response:**
```json
{
  "status": "OK",
  "message": "Backend is running!"
}
```

---

### Authentication

#### `POST /api/auth/register`
Register a new user account.

**Auth Required:** No

**Request Body:**
```json
{
  "username": "string (min 3, max 50 characters)",
  "email": "string (valid email format)",
  "password": "string (min 8 characters)"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGci...",
  "user": {
    "id": 1,
    "username": "testuser",
    "email": "test@test.com"
  }
}
```

**Error Responses:**
| Status | Error |
|--------|-------|
| 400 | Username must be at least 3 characters |
| 400 | Username must be less than 50 characters |
| 400 | Please provide a valid email address |
| 400 | Password must be at least 8 characters |
| 409 | Email already in use |
| 409 | Username already taken |

---

#### `POST /api/auth/login`
Login with existing credentials and receive a JWT token.

**Auth Required:** No

**Request Body:**
```json
{
  "email": "string (valid email format)",
  "password": "string"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGci...",
  "user": {
    "id": 1,
    "username": "testuser",
    "email": "test@test.com"
  }
}
```

**Error Responses:**
| Status | Error |
|--------|-------|
| 400 | Please provide a valid email address |
| 400 | Password is required |
| 401 | Invalid email or password |

---

#### `GET /api/auth/me`
Get the currently logged in user's profile.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "user": {
    "id": 1,
    "username": "testuser",
    "email": "test@test.com",
    "created_at": "2026-02-21T22:40:07.250Z"
  }
}
```

**Error Responses:**
| Status | Error |
|--------|-------|
| 401 | No token provided |
| 401 | Invalid or expired token |
| 404 | User not found |

---

### Protected Route Example

#### `GET /api/profile`
Example of a protected route. Demonstrates how JWT middleware works.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "message": "This is a protected route!",
  "userId": 1,
  "username": "testuser"
}
```

---

## Frontend Integration Guide

### How to call the API from Next.js (Dylan's reference)

#### Register a user:
```javascript
const response = await fetch('http://10.142.60.57:5000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, email, password })
});
const data = await response.json();
// Save data.token to localStorage or cookies
```

#### Login:
```javascript
const response = await fetch('http://10.142.60.57:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
});
const data = await response.json();
// Save data.token to localStorage or cookies
```

#### Call a protected endpoint:
```javascript
const token = localStorage.getItem('token');
const response = await fetch('http://10.142.60.57:5000/api/auth/me', {
  headers: { 'Authorization': `Bearer ${token}` }
});
const data = await response.json();
```

---

## Database Schema

### Users Table
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

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18.19.1 | Runtime |
| Express | 5.2.1 | Web framework |
| TypeScript | 5.9.3 | Type safety |
| PostgreSQL | 16.11 | Database |
| bcrypt | 6.0.0 | Password hashing |
| jsonwebtoken | 9.0.3 | JWT tokens |
| cors | 2.8.6 | Cross-origin requests |
| tsx | latest | TypeScript runner |

---

## Error Format

All errors follow this format:
```json
{
  "error": "Error message here"
}
```

Server errors (500) return:
```json
{
  "error": "Something went wrong on the server",
  "message": "Detailed error (development mode only)"
}
```

---

## Running the Server

```bash
cd ~/comp2003-2025-2026-group-33/backend
npm run dev
```

Server starts on port 5000.
