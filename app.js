import express from "express";
import swaggerUi from 'swagger-ui-express';
import routerUser from "./src/router/userRouter.js";
// import swaggerSpec from "./src/swager/swager.js";
import eventRouter from "./src/router/eventRouter.js";
import bookingRouter from "./src/router/bookingRouter.js";
import fs from "fs";
import yaml from "js-yaml";

import attendanceRouter from "./src/router/attendanceRouter.js";
import './src/model/Attendance.js'
import swaggerSpec from "./src/swager/swager.js";

const app = express();
const swaggerDocument = yaml.load(fs.readFileSync("./swagger.yaml", "utf8"));

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json())

app.use('/api/v1', routerUser)
app.use('/api/v1',eventRouter)
app.use('/api/v1',bookingRouter)
app.use('/api/v1',attendanceRouter)


export default app;
