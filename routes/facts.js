import express from "express";
import { getFacts } from "../controllers/getFacts.js";
import { getRandomFact } from "../controllers/getRandomFact.js";
import jwtValidator from "../util/jwtValidator.js";
import { putFact } from "../controllers/putFact.js";
var router = express.Router();

/* GET home page. */
router.all("/", jwtValidator);
router.get("/", getFacts);
router.all("/random", jwtValidator);
router.get("/random", getRandomFact);
router.all("/create", jwtValidator);
router.post("/create", putFact);

export default router;
