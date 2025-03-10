import db from "../sequelize.js";

export const getFacts = async (req, res, next) => {
  const facts = await db.query("SELECT * FROM t_Facts");
  res.status(200).json(facts);
};
