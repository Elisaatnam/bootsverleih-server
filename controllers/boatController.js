import { Router } from "express";
import { Boat } from "../models/BoatModel.js";
import multer from "multer";

const upload = multer({ dest: "./images" });

export const boatRouter = Router();

boatRouter.get("/", async (req, res) => {
	const allBoats = await Boat.find();
	res.send(allBoats);
});

boatRouter.get("/availBoats", async (req, res) => {
	try {
		const reservedBoats = await Boat.find({
			verliehenAb: { $lt: req.body.endDate },
			verliehenBis: { $gte: req.body.startDate },
		});

		console.log(reservedBoats);

		// Finde alle Boote, die nicht in der reservierten Liste sind
		const allBoats = await Boat.find({});
		const availBoats = allBoats.filter(boat => !reservedBoats.includes(boat));

		res.send(availBoats);
	} catch (err) {
		console.log(err);
	}
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
