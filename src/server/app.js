import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

dotenv.config();

const app = express();
const databaseUrl = process.env.DATABASE_URL;

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(databaseUrl, { useNewUrlParser: true })
  .catch(e => console.log(e.message));

app.get("/", (req, res) => res.send({ hi: "Hello boy girl", databaseUrl }));

export default app;
