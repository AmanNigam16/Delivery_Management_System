require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const authRoutes = require("./routes/authRoutes");


app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Auth DB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Auth Service Running");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
