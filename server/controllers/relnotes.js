import Relnote from "../models/Relnote.js";

export const getRelnotes = async (req, res) => {
  try {
    const allRelnotes = await Relnote.find();
    console.log(allRelnotes);
    res.status(200).json(allRelnotes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRelnotes = async (req, res) => {
  const notes = req.body;
  const newNotes = new Relnote(notes);

  try {
    await newNotes.save();
    res.status(201).json(newNotes);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
