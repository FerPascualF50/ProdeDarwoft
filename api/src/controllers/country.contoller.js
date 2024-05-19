import mongoose from "mongoose";
import { getCoutriesService } from "../services/country.service.js";

export const getCoutriesController = async (req, res) => {
  try {
    const countries = await getCoutriesService({});
    return res.status(200).send({ success: true, response: countries });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};