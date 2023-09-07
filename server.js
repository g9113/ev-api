const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./utils/db");
const auth = require('./routes/auth')
const merchant = require("./routes/merchant");
const client = require("./routes/client");


const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);


app.use("/api/auth", auth);
app.use("/api/merchant", merchant);
app.use("/api/view", client);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Listening on Port ${PORT}`);
    });
  })
  .catch(console.log);
