import 'dotenv/config';
import swaggerJsdoc from 'swagger-jsdoc';

const port = process.env.PORT || 3000;  // agar env me na ho to default

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Event Booking API",
      version: "1.0.0",
      description: "Mini Event Management System API"
    },
    servers: [
      {
        url: `http://localhot:${port}`,
        description: "Local development server"
      }
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name", "email"],
          properties: {
            name: { type: "string", example: "Reenu" },
            email: { type: "string", format: "email", example: "reenu@gmail.com" }
          }
        },
        Event: {
          type: "object",
          required: ["title", "date", "total_capacity"],
          properties: {
            title: { type: "string", example: "Music Concert" },
            description: { type: "string", example: "A live concert event" },
            date: { type: "string", format: "date", example: "2026-04-05" },
            total_capacity: { type: "integer", example: 100 },
            remaining_tickets: { type: "integer", example: 100 }
          }
        },
        Booking: {
          type: "object",
          required: ["user_id", "event_id"],
          properties: {
            user_id: { type: "integer", example: 1 },
            event_id: { type: "integer", example: 5 }
          }
        },
        Attendance: {
          type: "object",
          required: ["booking_code"],
          properties: {
            booking_code: { type: "string", example: "BOOK-1680345678901" }
          }
        }
      }
    }
  },
  apis: ["./src/controllers/*.js", "./src/routes/*.js"] // jaha endpoints likhe hai
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;