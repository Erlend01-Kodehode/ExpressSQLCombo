import express from "express";
import { getFacts } from "../controllers/getFacts.js";
import { getRandomFact } from "../controllers/getRandomFact.js";
var router = express.Router();

/* GET home page. */
router.get("/", getFacts);
router.get("/random", getRandomFact);

export default router;
