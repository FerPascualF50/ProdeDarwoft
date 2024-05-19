import { CountryModel } from "../database/models/country.schema.js";


export const getCoutriesService = async () => {
  try {
    const countries = await CountryModel.find({});
    if(!countries) throw new Error('Error al buscar paises en la base de datos')
    return countries;
  } catch (error) {
    throw error;
  };
};
