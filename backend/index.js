require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const defineCurrentUser = require("./middleware/defineCurrentUser");
const path = require("path");

app.use(cors({
    origin: "http://localhost:3000" // replace with your React app's origin
  }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentUser);

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

app.use(express.urlencoded({ extended: true }));

app.use("/movies", require("./controllers/movies"));
app.use("/users", require("./controllers/users"));
app.use("/authentication", require("./controllers/authentication"));

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
