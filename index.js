import { connect } from "mongoose";
import express from "express";
import {
  initialize,
  session,
  use,
  serializeUser,
  deserializeUser,
} from "passport";
import LocalStrategy from "passport-local";
import {
  authenticate,
  serializeUser as _serializeUser,
  deserializeUser as _deserializeUser,
} from "./models/userModel";
import { urlencoded } from "body-parser";
import indexRoutes from "./routes/indexRoutes";
import adminRoutes from "./routes/adminRoutes";
import blogRoutes from "./routes/blogRoutes";

const app = express();

//App Config
connect("mongodb://localhost/BlogApp")
  // Mongo Connection Check
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("js"));
app.use(urlencoded({ extended: true }));

//Passport Config
app.use(
  require("express-session")({
    secret: "bu güvenlik cümlesi",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(initialize());
app.use(session());
use(new LocalStrategy(authenticate()));
serializeUser(_serializeUser());
deserializeUser(_deserializeUser());

//Share currentUser with all templates
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//Routes
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

//Server
const server = app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("App Started. Port number  : %d ", server.address().port);
});
