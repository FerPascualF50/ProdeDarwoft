import express from "express";
import { countryRouter } from "./country.routes.js";
import { matchRouter } from "./match.routes.js";
import { authRouter } from "./auth.routes.js";

export const router = express.Router();
router
	.use("/auth", authRouter)
	.use("/countries", countryRouter)
	.use("/matches", matchRouter);