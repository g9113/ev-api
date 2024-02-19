const express = require("express");
const router = express.Router();
const repocontroller = require("../controllers/OpenSource");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
router.post("/createrepo", authorize, repocontroller.createGithubRepo);
router.post("/deleterepo/:id", authorize, repocontroller.deleteGithubRepo);
router.get("/getallrepo", authenticate, repocontroller.getAllGithubRepos);
router.get("/getrepo/:id", authenticate, repocontroller.getRepobyid);
router.get("/getlastestrepo", authenticate, repocontroller.getAllGithubReposlastest);

module.exports = router;
