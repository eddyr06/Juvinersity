import express from "express";
import {
  getAllArticles,
  getAnArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllArticles);
router.get("/:id", getAnArticle);
router.post("/", createArticle);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
