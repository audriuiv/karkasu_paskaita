import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { ICity, City } from "../../../schemas/city.schema";
import connect from "../../../lib/mongoose";
import { ObjectId } from "mongodb";

export default async function GetCity(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //const session = await unstable_getServerSession(req, res, authOptions);
  //if (!session) return res.status(401).json({ error: "Reikia prisijungti" });
  await connect();
  //name: req.query.city
  //[{"_id":"63189b6b9aff5bfea537401c","name":"Vilnius","population":592000},{"_id":"63189bff9aff5bfea537401d","name":"Kaunas","population":381000}]

  await City.updateOne(
    { _id: new ObjectId("63189bff9aff5bfea537401d") },
    { $set: { name: "Subacius" } }
  );

  const cities /*: ICity[]*/ = await City.find({});
  console.log(cities);
  res.json(cities);
}
