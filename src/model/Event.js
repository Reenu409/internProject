import { DataTypes } from "sequelize";
import { dataBase } from "../config/db.js";

export const EventDb = dataBase.define("Event",{

id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
},
title:{
    type:DataTypes.STRING,
    allowNull:false,
},
description:{
    type:DataTypes.TEXT,
    allowNull:false,
},
date:{
    type:DataTypes.DATE,
    allowNull:false,
},
total_capacity:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        min:1
    }
},
remaining_tickets:{
    type:DataTypes.INTEGER,
    allownull:false,
    validate:{
        min:0
    }
},
remaining_tickets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

},
{
  tableName: "events",
  timestamps: true
})

