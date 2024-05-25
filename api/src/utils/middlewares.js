import express from 'express';
import cors from 'cors';
import session from 'express-session';
import 'dotenv/config';
import passport from '../services/auth.service.js';
import bodyParser from 'body-parser';
import jwt from "jsonwebtoken";

export const middlewares = express();

middlewares.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000', 'http://localhost:4000/api/auth/google/callback'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}));

middlewares.use(bodyParser.json());
middlewares.use(express.urlencoded({ extended: true }));

middlewares.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24  },
}));

middlewares.use(passport.initialize());
middlewares.use(passport.session());

middlewares.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ code: 500, message: err.message });
});



export const authMiddleware = (req, res, next) => {
   try {
      if (!req.headers.authorization) throw new Error('Token inexistente');
      const accsess_token = req.headers.authorization.split(" ").pop();
      if (!accsess_token) throw new Error('Token inexistente');
      const user = jwt.verify(accsess_token, process.env.JWT_SECRET);
      req.user = user;
      next();
   } catch (error) {
      res.json({ success: false, response: error.message });
   }
};

// export const unauthorizedMiddleware = async (req, res, next) => {
//   try {
//     const { rol } = req.user;
//     if (rol !== "admin") {
//       throw new Error(`Acceso no autorizado. El rol: ${rol} no tiene acceso.`);
//     }
//     next();
//   } catch (error) {
//     res.json({ success: false, response: error.message });
//   }
// };