const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post");
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(postRoutes);

const port = 8000;
const DB_URL =  "mongodb+srv://chathura:chathura123@cluster0.pnehkue.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(`db connection error ${err}`);
  });

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
