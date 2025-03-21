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
    dui: {
        type : String
       // required : true,
       // unique: true,
     //   match: [/^[0-9]{8}-[0-9]{1}$/ , 'Formato de DUI inválido'], 
    },
    firstName : {
        type : String,
        minlength: 2
    },
    lastName : {
        type : String,
        minlength: 2
    },
    role :  {
        type : String,
        required : true,
        enum: ['Admin', 'Vendedor']
    },
    email :  {
        type : String,
        required : true,
     //   unique : true,
        match : [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/]
    },
    username :  {
        type : String,
        required : true,
        unique : true
    },
    password :  {
        type : String,
        required : true,
        minlength: 6,
        maxlength: 20
    },
    phoneNumber :  {
        type : String,
        required : true,
        match : [/^[0-9]{4}-[0-9]{4}$/]
    },
    birthDate :  {
        type : Date,
        required : true
    },
    sex :  {
        type : String,
        required : true,
        enum: ['M', 'F']
    },
    status : {
        type : Boolean,
        required : true,
        default : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("User", userSchema)