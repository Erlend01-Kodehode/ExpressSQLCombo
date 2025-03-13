import { Sequelize } from "sequelize";
import db from "../sequelize.js";

export const putFactQuery = async (fact) => {
  const putFact = db.query("INSERT INTO t_Facts (Fact) VALUES (?)", {
    replacements: [fact],
    type: Sequelize.QueryTypes.INSERT,
  });
};
