import db from "../sequelize.js";

export const createUserQuery = ({ email, firstname, lastname, password }) => {
  const createUser = db.prepare(
    "INSERT INTO t_Users (Email, FirstName, LastName, HashPassword) VALUES(?, ?, ?, ?)"
  );
  createUser.run(email, firstname, lastname, password);
};
