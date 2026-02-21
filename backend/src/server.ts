import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database.js';
import authRoutes from './routes/authRoutes.js';
import { authenticate, type AuthRequest } from './middleware/auth.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check (public)
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

// Protected route example
app.get('/api/profile', authenticate, (req: AuthRequest, res: Response) => {
  res.json({
    message: 'This is a protected route!',
    userId: req.userId,
    username: req.username
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

