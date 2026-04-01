// models/index.js


import { Booking } from "./Booking.js";
import { EventDb } from "./Event.js";
import { User } from "./User.js";

Booking.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Booking, { foreignKey: "user_id" });

Booking.belongsTo(EventDb, { foreignKey: "event_id" });
EventDb.hasMany(Booking, { foreignKey: "event_id" });

export { User, EventDb, Booking, };