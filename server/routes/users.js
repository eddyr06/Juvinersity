import express from "express";
import { signin, signup, getAllUsers, getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
