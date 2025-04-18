import bcrypt from "bcrypt";
import { createUserQuery } from "./createUserQuery.js";

export const createUser = async (req, res, next) => {
  const { email, firstname, lastname, password } = req.body;

  // Salts and Hashes Provided Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Attempts sql input with provided data and hashed password
  try {
    createUserQuery(email, firstname, lastname, hashedPassword);
    res.status(201).json({ message: "User signed up successfully" });
  } catch (e) {
    next(new Error(e.message));
  }
};
