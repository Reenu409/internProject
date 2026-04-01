

import { Sequelize } from "sequelize";
import 'dotenv/config';





export  const dataBase = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PWD,
{
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:process.env.DB_DIALATE
}

)

async function testDB(){
    try{
        await dataBase.authenticate()
            console.log("✅ Database connection successful!");
            // const isProd = process.env.NODE_ENV === 'production';
            //  console.log("Environment:", isProd);

  await dataBase.sync({ force: false},{alert:false});
         console.log("✅ Models synced");

         

//          const [results] = await dataBase.query("DESCRIBE Events;");
// console.log(results);


    }catch(err){
    console.error(" Unable to connect to the database:", err);
    }
}
testDB()