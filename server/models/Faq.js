import mongoose from "mongoose";

const faqSchema = mongoose.Schema({
  subject: {
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
  likeCount: {
    type: Number,
    default: 0,
  },

  creatorId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Faq = mongoose.model("Faq", faqSchema);
export default Faq;
