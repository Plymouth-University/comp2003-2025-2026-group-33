import express, { type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database.js';
import authRoutes from './routes/authRoutes.js';
import { authenticate, type AuthRequest } from './middleware/auth.js';
import { errorHandler } from './middleware/errorHandler.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS - allow frontend to connect
app.use(cors({
  origin: ['http://localhost:3000', 'http://10.142.60.57:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
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

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
