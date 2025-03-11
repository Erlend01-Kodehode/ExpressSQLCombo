import { Sequelize } from "sequelize";
import db from "../sequelize.js";

export const loginUserQuery = (email) => {
  const loginUser = db.query("SELECT * FROM t_Users WHERE Email = ?", {
    replacements: [email],
    type: Sequelize.QueryTypes.SELECT,
  });
};
