import express from "express";
import { countryRouter } from "./country.routes.js";
import { matchRouter } from "./match.routes.js";
// import { authMiddleware } from "../utils/middlewares.js";


export const router = express.Router();
router
	// .use("/users", authMiddleware, userRouter)
  // .use("/auths", userAuthRouter)
	.use("/countries", countryRouter)
	.use("/matches",  matchRouter);