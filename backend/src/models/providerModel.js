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

const providerSchema = new Schema({

    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    company :  {
        type : String,
        require : true
    },
    email :  {
        type : String,
        require : true,
        default : unique,
        match : [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/]
    },
    phoneNumber : {
        type : String,
        require : true,
        match : [/^[0-9]{4}-[0-9]{4}$/]
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Provider", providerSchema)