import express from "express";
import { getDownloads, createDownloads } from "../controllers/downloads.js";

const router = express.Router();

router.get("/", getDownloads);
router.post("/", createDownloads);

export default router;
