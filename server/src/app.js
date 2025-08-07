import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import authRoutes from './routes/auth.Route.js'

dotenv.config();


const app = express();

// Middleware
app.use(cors(
  {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/auth",authRoutes);

export default app;