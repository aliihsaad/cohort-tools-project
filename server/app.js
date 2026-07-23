import connectDB from "./db/index.js";
import { Router } from "express";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

const PORT = 5005;



// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();
///


// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(cors)
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...
app.use(cors({origin: [process.env.CLIENT_ORIGIN]}));

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/cohorts", (req, res) => {
  res.json(cohorts);
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.



// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//INITIALIZE MONGOOSE 


connectDB();
