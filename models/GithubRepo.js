const asyncErrorHandler = require("../utils/asyncErrorHandler");
const GithubRepo = require("./GithubRepo");

// Create Github Repo
const createGithubRepo = asyncErrorHandler(async (req, res, next) => {
  const { name, description, owner, url, stars, forks, language } = req.body;

  try {
    const repoExist = await GithubRepo.findOne({ name });

    if (repoExist) {
      return res.status(400).json({ status: "error", message: "Repository already exists" });
    }

    const newRepo = new GithubRepo({
      name, description, owner, url, stars, forks, language
    });

    const result = await newRepo.save();
    return res.status(201).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
});

// Get All Github Repos
const getAllGithubRepos = asyncErrorHandler(async (req, res, next) => {
  try {
    const repos = await GithubRepo.find();
    res.json({ status: "success", data: repos });
  } catch (error) {
    next(error);
  }
});

// Delete Github Repo
const deleteGithubRepo = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedRepo = await GithubRepo.findByIdAndDelete(id);
    if (!deletedRepo) {
      return res.status(404).json({ status: "error", message: "Repository not found" });
    }
    res.json({ status: "success", message: "Repository deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createGithubRepo,
  getAllGithubRepos,
  deleteGithubRepo
};
