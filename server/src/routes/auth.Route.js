import express from 'express';
import { signup, login, getProfile } from '../controllers/auth.controller.js'; // Adjust path as needed
import { authenticateToken } from '../middlewares/authMiddleware.js'; // Adjust path as needed

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/profile', authenticateToken, getProfile);

export default router;