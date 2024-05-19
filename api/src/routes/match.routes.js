import express from "express";
// import { unauthorizedMiddleware } from "../utils/middlewares.js";
import { getmatchesController } from "../controllers/match.controller.js";

export const matchRouter = express.Router();
matchRouter
  .get("/", getmatchesController)
  // .patch("/:id", unauthorizedMiddleware, updatePriceController);