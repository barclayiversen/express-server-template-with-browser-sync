const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("static"));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.render("index", {
    acronym: "HRT 2022",
    title: "Hot Reload Template 2022",
  });
});
