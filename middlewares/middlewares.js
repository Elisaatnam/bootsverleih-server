import express from "express";
import cors from "cors";
import { boatRouter } from "../controllers/boatController.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("./images"));

app.use("/api/boats", boatRouter);
