import mongoose from "mongoose";
import Faq from "../models/Faq.js";

export const getAllFaq = async (req, res) => {
  try {
    const allPosts = await Faq.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFaq = async (req, res) => {
  try {
    const post = await Faq.findById();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFaq = async (req, res) => {
  const post = req.body;
  const newPost = new Faq(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updateFaq = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not a valid ID");
  }

  const updatedPost = await Faq.findByIdAndUpdate(
    id,
    { ...post, id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deleteFaq = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Not a valid ID");
  }

  await Faq.findByIdAndRemove(id);

  res.json({ message: "Success Deletion" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Not a valid ID");

  const post = await Faq.findById(id);
  const updatedPost = await Faq.findByIdAndUpdate(id, {
    likeCount: post.likeCount + 1,
  });

  res.json(updatedPost);
};
