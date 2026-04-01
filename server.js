import http from 'http';
import app from './app.js';
import { dataBase } from './src/config/db.js';
import { User } from './src/model/User.js';
import 'dotenv/config';
import { EventDb } from './src/model/Event.js';



const server = http.createServer(app);
const port = process.env.PORT

server.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`);
    
})