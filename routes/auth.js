import express from "express";
import { createUser } from "../controllers/createUser.js";
import { loginUser } from "../controllers/loginUser.js";
var router = express.Router();

/* GET home page. */
router.post("/create", createUser);
router.post("/login", loginUser);

export default router;
