import express from "express";
import {
  getAllFaq,
  getFaq,
  createFaq,
  updateFaq,
  deleteFaq,
  likePost,
} from "../controllers/faq.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllFaq);
router.get("/:id", getFaq);
router.post("/", createFaq);
router.patch("/:id", updateFaq);
router.delete("/:id", deleteFaq);
router.patch("/", likePost);

export default router;
