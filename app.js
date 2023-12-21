import "dotenv/config";
import { app } from "./middlewares/middlewares.js";
import mongoose from "mongoose";

//Verbindung mit der DB herstellen
await mongoose.connect(process.env.MONGODB_URI);

app.listen(process.env.PORT, console.log(`lauft auf ${process.env.PORT}`));
