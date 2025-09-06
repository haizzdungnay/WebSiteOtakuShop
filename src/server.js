const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => res.render("pages/home", { msg: "Otaku Shop is running 🚀" }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
