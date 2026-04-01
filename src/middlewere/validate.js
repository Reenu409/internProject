import { body, param } from "express-validator";

export const validateUser = [
  body('name')
    .trim()
    .notEmpty().withMessage("Title is required")
    .withMessage('Name is required'),

  body('email')
    .isEmail()
    .withMessage('Valid email required'),
];
export const validateEvent = [
  body("title")
   .trim()
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),

  body("description")
    .optional()
    .isLength({ min: 5 }).withMessage("Description must be at least 5 characters"),

  body("total_capacity")
    .notEmpty().withMessage("Total capacity is required")
    .isInt({ min: 1 }).withMessage("Total capacity must be greater than 0"),

  body("id")
    .optional()
    .isInt().withMessage("ID must be a number")
];




export const bookingValidator = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt({ min: 1 })
    .withMessage("user_id must be a positive integer"),

  body("event_id")
    .notEmpty()
    .withMessage("event_id is required")
    .isInt({ min: 1 })
    .withMessage("event_id must be a positive integer"),
];


export const attendanceValidator = [
  param("id")
    .notEmpty()
    .withMessage("event id is required")
    .isInt({ min: 1 })
    .withMessage("event id must be a positive integer"),

  body("booking_code")
    .notEmpty()
    .withMessage("booking_code is required")
    .isString()
    .withMessage("booking_code must be a string")
    .isLength({ min: 3 })
    .withMessage("booking_code is invalid"),
];