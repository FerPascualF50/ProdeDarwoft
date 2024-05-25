import express from 'express';
import { googleAuth, googleAuthCallback, logout, validateToken } from '../controllers/auth.controller.js';
import { authMiddleware } from "../utils/middlewares.js";
export const authRouter = express.Router();

authRouter
  .post('/google', googleAuth)
  .get('/google/callback', googleAuthCallback)
  .get('/login/success', (req, res) => res.send({ success: true, message: 'Login exitoso' }))
  .get('/login/failed', (req, res) => res.send({ success: false, message: 'Login fallido' }))
  .get('/check-token', authMiddleware, validateToken )
  .get('/logout', logout);