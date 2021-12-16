import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  fullDescription: {
    type: String,
    required: false,
  },

  topic: {
    type: String,
    enum: ["Printer", "Reports", "Menus", "Hardware", "Operations"],
    required: false,
  },

  module: {
    type: String,
    enum: ["Point Of Sale", "Backoffice", "Admin"],
    required: false,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },

  creator: {
    type: String,
  },

  name: {
    type: String,
  },

  creator: {
    type: String,
  },
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
