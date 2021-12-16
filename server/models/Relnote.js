import mongoose from "mongoose";

const relnotesSchema = mongoose.Schema({
  verion: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },

  creatorId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Relnote = mongoose.model("Relnote", relnotesSchema);

export default Relnote;
