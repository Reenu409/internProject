import express from "express";

import { getUserBookings, getUserById, UserData, UserGet } from "../controllers/UserController.js";
import { validateUser } from "../middlewere/validate.js";

const routerUser = express.Router()

routerUser.post('/user',validateUser,UserData)
routerUser.get('/user',UserGet)
routerUser.get('/user/:id',getUserById)
routerUser.get('/user/:id/booking',getUserBookings)
export default routerUser;
