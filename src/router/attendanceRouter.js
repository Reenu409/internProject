import express from 'express';
import { MarkAttendance } from '../controllers/AttendanceController.js';
import { attendanceValidator } from '../middlewere/validate.js';


const attendanceRouter = express.Router()

attendanceRouter.post('/events/:id/attendance',attendanceValidator,MarkAttendance)

export default attendanceRouter;
