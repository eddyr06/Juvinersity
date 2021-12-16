import mongoose from "mongoose";

const downloadsSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
    unique: true,
  },
  selectedFile: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Download = mongoose.model("Download", downloadsSchema);

export default Download;
