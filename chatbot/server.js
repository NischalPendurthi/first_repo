
const express = require("express");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
const { generateResponse } = require("./controllers/cindex.js");


//middleware to parse the body content to JSON

//
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.post("/generate", generateResponse);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/generate", (req, res) => {
    res.send(history);
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});