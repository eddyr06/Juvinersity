import express from "express";
import {
  getAllFaq,
  getFaq,
  createFaq,
  updateFaq,
  deleteFaq,
} from "../controllers/faq.js";

const router = express.Router();

router.get("/", getAllFaq);
router.get("/:id", getFaq);
router.post("/", createFaq);
router.patch("/:id", updateFaq);
router.delete("/:id", deleteFaq);

export default router;
