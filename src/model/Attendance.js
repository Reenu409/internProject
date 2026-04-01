import { DataTypes } from "sequelize";
import { dataBase } from "../config/db.js";
import {  Booking } from "./Booking.js"; 

export const Attendance = dataBase.define("Attendance", {  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  booking_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  entry_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
});
