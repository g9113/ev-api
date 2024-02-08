const asyncErrorHandler = require("../utils/asyncErrorHandler");
const Repo = require("../models/GithubRepo");

const createGithubRepo = async (req, res, next) => {
  const { name, description, owner, url, stars, forks, language } = req.body;

  try {
    const repoExist = await Repo.findOne({ name });

    if (repoExist) {
      return res.status(400).json({ status: "error", message: "Repository already exists" });
    }

    const newRepo = new Repo({
      name, description, owner, url, stars, forks, language
    });

    const result = await newRepo.save();
    return res.status(201).json({ status: "success", data: result });
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
};

const getAllGithubRepos = async (req, res, next) => {
  try {
    const repos = await Repo.find();
    res.json({ status: "success", data: repos });
  } catch (error) {
    next(error);
  }
};

// Delete Github Repo
const deleteGithubRepo = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedRepo = await Repo.findByIdAndDelete(id);
    if (!deletedRepo) {
      return res.status(404).json({ status: "error", message: "Repository not found" });
    }
    res.json({ status: "success", message: "Repository deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createGithubRepo,
  getAllGithubRepos,
  deleteGithubRepo
};
