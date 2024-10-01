const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Name:${name}, Email:${email},Message:${message}");
  res.send("Form received");
});

app.listen(port, () => {
  console.log("server running on port ${port}");
});
