import { MatchModel } from "../database/models/match.schema.js";

export const getMatchesService = async () => {
  try {
    const matches = await MatchModel.find({})
      .populate('localCountry.id')
      .populate('visitorCountry.id');

    if (!matches) throw new Error('Error al buscar partidos en la base de datos');

    return matches;
  } catch (error) {
    throw error;
  }
};
