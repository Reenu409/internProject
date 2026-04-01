import { validationResult } from "express-validator";
import { User } from "../model/User.js";
import { Booking } from "../model/Booking.js";
import { EventDb } from "../model/Event.js";


export async function UserData(req, res, next) {
    try {
        const { name, email } = req.body;
        console.log(name, email)

     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array()
      });
    }

        const existingUer = await User.findOne({
            where: { email }
        })

        if (existingUer) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }




        const userData = await User.create({ name, email });
        console.log(userData, "dta")
        return res.status(200).json({
            status: "success",
           
        })
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: "User api not work",
            err: err.message
        })
    }
}






export async function UserGet(req, res) {
    try {
        const UserAll = await User.findAll()
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



export async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const count = await Booking.count({
      where: { user_id: id }
    });

    res.json({
      status: "success",
      user_id: id,
      total_bookings: count
    });

  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message
    });
  }
}








// controllers/userController.js



export const getUserBookings = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id)

    const bookings = await Booking.findAll({
      where: { user_id: id },
       attributes: {
    exclude: ["createdAt", "updatedAt"]
  },
      include: [
        {
          model: EventDb,
          attributes: ["id", "title", "description", "date"]
        }
      ]
    });
// console.log(bookings,"check ho gya ")

    if (bookings.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "no booking found for this user"
      });
    }

    return res.status(200).json({
      status: "success",
      totalBookings: bookings.length,
      data: bookings
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong",
      error: error.message
    });
  }
};