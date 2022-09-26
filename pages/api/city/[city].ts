import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import City, { ICity } from "../../../schemas/city.schema";
import connect from "../../../lib/mongoose";

export default async function GetCity(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Reikia prisijungti" });
  await connect();
  const cities: ICity[] = await City.find({ name: req.query.city });
  res.json(cities);
}
