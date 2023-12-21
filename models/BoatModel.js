import mongoose from "mongoose";

const boatSchema = new mongoose.Schema({
	name: String,
	baujahr: Number,
	seriennummer: String,
	bootsart: String,
	img_url: String,
});

export const Boat = mongoose.model("Boats", boatSchema);
