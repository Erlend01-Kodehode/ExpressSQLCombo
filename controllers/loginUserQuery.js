import { Sequelize } from "sequelize";
import db from "../sequelize.js";

export const loginUserQuery = async (email) => {
  const loginUser = await db.query("SELECT * FROM t_Users WHERE Email = ?", {
    replacements: [email],
    type: Sequelize.QueryTypes.SELECT,
  });
  //   console.log(loginUser[0]);
  return loginUser[0];
};
