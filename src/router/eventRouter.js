import express from 'express'
import { EvenCollectiont, EventGet } from '../controllers/EventsController.js'
import {validateEvent} from '../middlewere/validate.js'


const eventRouter = express.Router()



/**
 * @swagger
 * /api/v1/event:
 *   post:
 *     summary: Create Event
 *     description: Create a new event
 *     tags:
 *       - Event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - total_capacity
 *             properties:
 *               title:
 *                 type: string
 *                 example: Music Concert
 *               description:
 *                 type: string
 *                 example: Live concert event
 *               total_capacity:
 *                 type: integer
 *                 example: 100
 *     responses:
 *       201:
 *         description: Event created successfully
 */
eventRouter.post('/event',validateEvent, EvenCollectiont)
eventRouter.get('/event',EventGet)


export default eventRouter;