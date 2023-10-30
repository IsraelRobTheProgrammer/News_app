const express = require("express");
const app = express();

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// template_engine config
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
const newsRouter = require("./src/routes/news");

app.use("/", newsRouter)

app.listen(8000, () => {
  console.log("listening on port 8000");
});
