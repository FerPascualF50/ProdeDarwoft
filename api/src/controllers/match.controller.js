import mongoose from "mongoose";
import { getMatchesService } from "../services/match.service.js";

export const getmatchesController = async (req, res) => {
  try {
    const matches = await getMatchesService({});
    return res.status(200).send({ success: true, response: matches });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};