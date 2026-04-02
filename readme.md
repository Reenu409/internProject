# Mini Event Management System

## Project Overview

This is a simple Event Booking System built using Node.js and MySQL.
In this project, users can view events and book tickets. I have completed all the required APIs along with database design and Swagger documentation as per the assignment.

---

## Live Demo

Project is also deployed and can be accessed here:
https://internbooking.onrender.com/

Swagger API Docs:
https://internbooking.onrender.com/api-docs

---

## Tech Stack

* Node.js
* Express.js
* MySQL (local database)
* Sequelize ORM
* Swagger (OpenAPI)

---

## Dependencies Used

* express
* sequelize
* mysql2
* dotenv
* express-validator
* swagger-jsdoc
* swagger-ui-express
* js-yaml
* nodemon

---

## Database Setup

I have created the database locally in MySQL and used it for development.

Database name:

```id="r4k9zp"
event_management
```

Tables created:

* Users
* Events
* Bookings
* EventAttendance

Steps:

1. Open MySQL
2. Run:

```sql id="p8v3xt"
CREATE DATABASE event_management;
```

3. Import the provided `schemas.sql` file

---

## Project Setup

1. Clone the repository:

```bash id="c7x1md"
git clone <your-repo-link>
cd project
```

2. Install dependencies:

```bash id="h3q8fn"
npm install
```

3. Create `.env` file:

```id="k2z9lx"
DB_NAME=event_management
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
```

4. Run the server:

```bash id="m9t2qv"
npm start
```

Server will run on:

```id="u6w4rs"
http://localhost:3000
```

---

## API Endpoints

### Events

* GET `/events` → Get all events
* POST `/events` → Create a new event

### Bookings

* POST `/bookings` → Book ticket (checks availability and generates booking code)

### Users

* GET `/users/:id/bookings` → Get all bookings for a user

### Attendance

* POST `/events/:id/attendance` → Check attendance using booking code

---

## Features Implemented

* Event creation and listing
* Ticket booking with availability check
* Remaining tickets update
* Unique booking code generation
* Attendance tracking
* Proper database relationships using foreign keys
* Input validation using express-validator
* Basic error handling
* Swagger API documentation

---

## Swagger Documentation

Swagger setup is included using swagger-jsdoc and swagger-ui-express.

Local:

```id="j8n3cv"
http://localhost:3000/api-docs
```

Live:
https://internbooking.onrender.com/api-docs

---

## Postman Collection

Postman collection is included to test all APIs easily.

---

## Notes

* Booking works only if tickets are available
* Remaining tickets are updated properly to avoid overbooking
* Booking code is required for attendance

---

## Author

This project is created as part of a selection test.
I have implemented all the required features and also deployed the project for testing.
