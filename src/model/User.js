import { DataTypes } from "sequelize";
import { dataBase } from "../config/db.js";
import { Booking } from "./Booking.js";
import { EventDb } from "./Event.js";


export const User = dataBase.define('User',{
    id:{
        type:DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull: false,
        validate:{
            isEmail:true
        }
    }
},
{
  tableName: 'users', 
  timestamps: true     
}
);


Booking.belongsTo(User, { foreignKey: "user_id" });
Booking.belongsTo(EventDb, { foreignKey: "event_id" });

User.hasMany(Booking, { foreignKey: "user_id" });
EventDb.hasMany(Booking, { foreignKey: "event_id" });
