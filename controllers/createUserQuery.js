import { Sequelize } from "sequelize";
import db from "../sequelize.js";

export const createUserQuery = async (email, firstname, lastname, password) => {
  const createUser = await db.query(
    "INSERT INTO t_Users (Email, FirstName, LastName, HashPassword) VALUES(?, ?, ?, ?)",
    {
      replacements: [email, firstname, lastname, password],
      type: Sequelize.QueryTypes.INSERT,
    }
  );
  //   createUser.run(email, firstname, lastname, password);
};
