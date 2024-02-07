const express = require("express");
const router = express.Router();
const repocontroller = require("../controllers/OpenSource");

router.post("/createrepo", repocontroller.createGithubRepo);
router.post("/deleterepo/:id", repocontroller.deleteGithubRepo);
router.get("/getallrepo", repocontroller.getAllGithubRepos);



module.exports = router;
