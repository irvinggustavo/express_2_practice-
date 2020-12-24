const express = require("express");
const app = express();
const foodRoutes = require("./routes/foodRoutes.js");

app.use((req, res, next) => {
  if (req.url === "/foods/soups") {
    console.log(req.url);
    console.log(new Date().toLocaleTimeString());
  }
  next();
});

app.use(express.static('public'))
app.use("/foods", foodRoutes);

app.listen(8080, () => {
  console.log("server listening in port 8080");
});
