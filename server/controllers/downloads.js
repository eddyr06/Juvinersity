import Download from "../models/Download.js";

export const getDownloads = async (req, res) => {
  try {
    const allDownloads = await Download.find();
    res.status(200).json(allDownloads);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDownloads = async (req, res) => {
  const file = req.body;
  const newFile = new Download(file);

  try {
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
