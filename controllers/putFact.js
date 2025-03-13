import db from "../sequelize.js";
import { putFactQuery } from "./putFactQuery.js";

export const putFact = async (req, res, next) => {
  const { fact } = req.body;

  try {
    putFactQuery(fact);
    res.status(201).json({ message: "Fact added successfully" });
  } catch (e) {
    next(new Error(e.message));
  }
};
