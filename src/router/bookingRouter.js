import express from 'express';
import { BookingAdd, BookinGetAll } from '../controllers/Booking.js';
import { bookingValidator } from '../middlewere/validate.js';



const bookingRouter = express.Router();

bookingRouter.post('/booking',bookingValidator,BookingAdd)
bookingRouter.get('/booking',BookinGetAll)


export default bookingRouter;