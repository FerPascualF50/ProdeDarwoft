import express from "express";
// import { unauthorizedMiddleware } from "../utils/middlewares.js";
import { getCoutriesController } from "../controllers/country.contoller.js";

export const countryRouter = express.Router();
countryRouter
  .get("/", getCoutriesController)
  // .patch("/:id", unauthorizedMiddleware, updatePriceController);