import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICity extends Document {
  _id: string;
  name: string;
  population: number;
}

const CitySchema: Schema = new Schema({
  _id: { type: String },
  name: { type: String },
  population: { type: Number, required: true },
});

const City: Model<ICity, {}, {}, {}, any> = mongoose.models.cities
  ? mongoose.models.cities
  : mongoose.model<ICity>("cities", CitySchema);
export default City;
