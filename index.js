const express = require("express");
const cors = require("cors");
const path = require('path');
const connectDB = require("./utils/db");


const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.use(express.json());
app.use(cors());
app.use("/api/auth", require('./routes/auth.route'));
app.use("/api/merchant", require('./routes/merchant.route'));
app.use("/api/view", require('./routes/client.route'));
app.use("/api/otp", require('./routes/otp.route'));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Listening on Port ${PORT}`);
    });
  })
  .catch(console.log);
