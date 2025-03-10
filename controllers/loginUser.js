import db from "../sequelize.js";

export const loginUser = async (req, res, next) => {
  res.status(200).json({ message: "Login" });
};
