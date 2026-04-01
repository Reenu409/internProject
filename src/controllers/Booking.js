import { raw } from "express";
import { dataBase as sequelize } from "../config/db.js";

import { EventDb,  } from "../model/Event.js";

import { User } from "../model/User.js";
import { Booking } from "../model/Booking.js";


export async function BookingAdd(req, res) {
    const { user_id, event_id } = req.body;


    
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            status: false,
            errors: errors.array()
          });
        }


        
    console.log(user_id, event_id)
    const t = await sequelize.transaction();



    // console.log(t,"data")
    try {
        const user = await User.findByPk(user_id)
        if(!user){
            return res.json({
                status:"failed",
                message:"User not Found Pls login"
            })
        }
        const event = await EventDb.findByPk(event_id, {
            transaction: t,
            raw: true,  
        });
        console.log(event.remaining_tickets, "data")



        if (!event) throw new Error("Event not found");
        if (event.remaining_tickets <= 0) throw new Error("Tickets sold out");



        event.remaining_tickets -= 1;
        await EventDb.update(
            { remaining_tickets: event.remaining_tickets - 1 },
            { where: { id: event_id }, transaction: t }
        );






        const booking_code = "BOOK-" + Date.now();
        const bookingCreatePayload = {
            user_id, event_id, booking_code
        }
        const booking = await Booking.create(bookingCreatePayload, { transaction: t });

        if (booking) {
            res.json({
                status: "success",
                message: "Booking successful",
                booking_code,
                remaining_tickets: event.remaining_tickets
            });
        }
        await t.commit();


    } catch (err) {

        res.status(400).json({
            status: "failed",
            error: err.message
        });
    }
}



export async function BookinGetAll(req, res) {
    try {
        const UserAll = await Booking.findAll()
        if (UserAll) {
            res.json({
                status: "success",
                message: "User All",
                data: UserAll
            })
        }
    } catch (err) {
        res.json({
            status: "failed",
            message: "event Api not work",

        })
    }

}