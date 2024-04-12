const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Empathease" });
});
app.get("/products", (req, res) => {
  res.render("products", { title: "Empathease" });
});
app.get("/services", (req, res) => {
  res.render("services", { title: "Empathease" });
});
//
//middleware for handling error 404
app.use((req, res, next) => {
  res.render("404", { title: "404" });
});
//
//middleware for handling error 500
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("500", { title: "500", message: err.message, err });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
