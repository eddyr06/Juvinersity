import mongoose from "mongoose";
import Article from "../models/Article.js";

export const getAllArticles = async (req, res) => {
  try {
    const allArticles = await Article.find();
    res.status(200).json(allArticles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAnArticle = async (req, res) => {
  try {
    const anArticle = await Article.findById();
    res.status(200).json(anArticle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createArticle = async (req, res) => {
  const article = req.body;
  const newArticle = new Article(article);
  //calling the model "Article" and asigning the article var declared in the line before

  try {
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;
  const article = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not a valid ID");
  }

  const updatedArticle = await Article.findByIdAndUpdate(
    id,
    { ...article, id },
    {
      new: true,
    }
  );

  res.json(updatedArticle);
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not a valid ID");
  }

  await Article.findByIdAndRemove(id);

  res.json({ message: "SucCess Deletion" });
};
