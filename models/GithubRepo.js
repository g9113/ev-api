const { Schema, model } = require("mongoose");

const repoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Repository name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    url: {
      type: String,
      required: [true, "Repository URL is required"],
    },
    language: {
      type: String,
      required: [true, "Primary language is required"],
    },
    stars: {
      type: Number,
      required: [true, "Number of stars is required"],
    },
    forks: {
      type: Number,
      required: [true, "Number of forks is required"],
    },
    owner: {
      type: String,
      required: [true, "Owner username is required"],
    },
  },
  { timestamps: true }
);

const Repo = model("Repo", repoSchema);

module.exports = Repo;
