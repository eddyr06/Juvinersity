import express from "express";
import { getRelnotes, createRelnotes } from "../controllers/relnotes.js";

const router = express.Router();

router.get("/", getRelnotes);
router.post("/", createRelnotes);

export default router;
