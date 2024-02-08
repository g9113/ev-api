const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./utils/db");
const bootcampRoutes = require("./routes/bootcamp");
const eventRoutes = require("./routes/Event");
const conferenceRoutes = require("./routes/Conferences");
const hackathonRoutes = require("./routes/Hackathon");
const openRepoRoutes = require("./routes/OpenSource");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api/bootcamps", bootcampRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/conferences", conferenceRoutes);
app.use("/api/hackathons", hackathonRoutes);
app.use("/api/openrepo", openRepoRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
  });
