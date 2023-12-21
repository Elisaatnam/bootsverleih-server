import { Router } from "express";
import { Reservation } from "../models/ReservationModel.js";

export const reservationRouter = Router();

reservationRouter.get("/", async (req, res) => {
	try {
		const newReservation = await Reservation.create(req.body);
		res.send(newReservation);
	} catch (err) {
		console.log(err);
	}
});
