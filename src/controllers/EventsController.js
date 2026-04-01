


import { validationResult } from "express-validator";
import { EventDb } from "../model/Event.js";

export async function EvenCollectiont(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: false,
                errors: errors.array()
            });
        }

        const { title, date, description, total_capacity } = req.body;

        // if(remaining_tickets > total_capacity){
        //     return res.status(400).json({
        //         message:"Remaining tickets cannot exceed total capacity"
        //     })
        // }
        const todayDate = new Date();
        // todayDate.setHours(0,0,0,0)
        console.log(todayDate, "aaj ki date")

        const eventDate = new Date(date);
        eventDate.setHours(0, 0, 0, 0);
        console.log(eventDate, "user ki date")


        // const eventDate = Date;

        if (eventDate <= todayDate) {
            return res.status(400).json({
                message: "Event date must be in the select today"
            });
        }


        const paylodEvent = {
            title,
            description,
            date,
            total_capacity,
            remaining_tickets: total_capacity
        }


        const event = await EventDb.create(paylodEvent)

        if (event) {
            return res.status(200).json({
                status: "success",
                message: "Event success create"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: "event Api is not work",
            error: err.message
        })
    }

}




export async function EventGet(req, res) {
    try {
        const EventGet = await EventDb.findAll()
        if (EventGet) {
            res.json({
                status: "success",
                message: "Event all",
                data: EventGet
            })
        }

    } catch (err) {

    }

}