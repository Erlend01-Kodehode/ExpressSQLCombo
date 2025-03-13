import db from "../sequelize.js";
import { loginUserQuery } from "./loginUserQuery.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await loginUserQuery(email);
    if (!user) {
      next(new Error(403));
      return;
    }
    // const correctPassword = await bcrypt.compare(password, user.HashPassword);
    bcrypt.compare(password, user.HashPassword, function (err, bcryptres) {
      if (!bcryptres) {
        next(new Error(403));
      } else {
        const payload = { user: email };
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(payload, secret, { expiresIn: "1h" });
        res.status(200).json({ message: "Authentication Successful", token });
      }
    });
  } catch (e) {
    next(new Error(e.message));
  }
};
