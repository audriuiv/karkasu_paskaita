import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  _id: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  _id: { type: String },
  username: { type: String },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  email: { type: String },
});

export const User: Model<IUser, {}, {}, {}, any> = mongoose.models.users
  ? mongoose.models.users
  : mongoose.model<IUser>("users", UserSchema);
