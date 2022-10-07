import { Schema, model, models, Model } from "mongoose";

export interface ICity {
  _id: string;
  name: string;
  population: number;
}

const CitySchema: Schema = new Schema<ICity>({
  name: { type: String },
  population: { type: Number, required: true },
});

export const City: Model<ICity, {}, {}, {}, any> = models.cities
  ? models.cities
  : model<ICity>("cities", CitySchema);
