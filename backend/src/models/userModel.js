/*
_id,
DUI,
FirstName,
LastName,
Role,
Email,
Username,
Password,
PhoneNumber,
BirthDate,
Gender,
Status
*/

import { Schema, model } from "mongoose";

const userSchema = new Schema({
    DUI: {
        type : String,
        require : true,
        unique: true,
        min: 9

    },
    fistName : {
        type : String
    },
    lastName : {
        type : String
    },
    email :  {
        type : String,
        require : true
    },
    password :  {
        type : String,
        require : true
    },
    isVerified : {
        type : Boolean,
        require : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Customer", customerSchema)