import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
	startDate: Date,
	endDate: Date,
	boatRef: { type: mongoose.Schema.Types.ObjectId, ref: "Boat" },
});

export const Reservation = mongoose.model("Reservations", reservationSchema);
