import db from "../sequelize.js";

export const getRandomFact = async (req, res, next) => {
  const facts = await db.query("SELECT top 1 * FROM t_Facts order by newID()");
  res
    .status(200)
    .json({ message: "Successfully fetched data", data: facts[0] });
};
