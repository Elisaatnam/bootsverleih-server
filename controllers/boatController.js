import { Router } from "express";
import { Boat } from "../models/BoatModel.js";
import multer from "multer";

const upload = multer({ dest: "./images" });

export const boatRouter = Router();

boatRouter.get("/", async (req, res) => {
	const allBoats = await Boat.find();
	res.send(allBoats);
});

boatRouter.post("/", upload.single("img"), async (req, res) => {
	try {
		const newBoat = await Boat.create({
			...req.body,
			img_url: req.file.path,
		});
		res.send(newBoat);
	} catch (err) {
		console.log(err);
	}
});
