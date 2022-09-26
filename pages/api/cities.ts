import { Request, Response } from "express";
import City, { ICity } from "../../schemas/city.schema";
import connect from "../../lib/mongoose";

export default async function Cities(req: Request, res: Response) {
  await connect();
  const cities: ICity[] = await City.find({});
  res.json(cities);
}
