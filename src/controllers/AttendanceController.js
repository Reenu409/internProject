import { dataBase } from "../config/db.js";
import { Attendance } from "../model/Attendance.js";
import { Booking } from "../model/Booking.js";


export async function MarkAttendance(req, res) {
    const { id: event_id } = req.params;
    const { booking_code } = req.body;


 const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            status: false,
            errors: errors.array()
          });
        }

    


    console.log(event_id, booking_code)

    const t = await dataBase.transaction();

    try {

        const bookingfound = await Booking.findOne({
            where: { booking_code, event_id },
            transaction: t,
        });

        if (!bookingfound) {
            throw new Error("Invalid booking code for this event");
        }


        const alreadyMarked = await Attendance.findOne({
            where: { booking_code },
            transaction: t,
        });

        if (alreadyMarked) {
            throw new Error("Attendance already marked");
        }


        const attendance = await Attendance.create(
            { booking_code },
            { transaction: t }
        );


        const tickets_used = await Attendance.count({
            where: { booking_code },
            transaction: t,
        });

        await t.commit();

        if (tickets_used) {
            res.json({
                status: "success",
                message: "Attendance marked successfully",
                data: {
                    booking_code,
                    entry_time: attendance.entry_time,
                    tickets_used,
                },
            });
        }


    } catch (err) {
        await t.rollback();

        res.status(400).json({
            status: "failed",
            error: err.message,
        });
    }
}