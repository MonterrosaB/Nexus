/*

_id,
FirstName,
LastName,
Email,
Username,
Password,
PhoneNumber,
BirthDate,
Sex,
Status,
isVerified

*/

import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    firstName : {
        type : String,
        minlength: 2
    },
    lastName : {
        type : String,
        minlength: 2
    },
    email :  {
        type : String,
        require : true,
        unique : true,
        match : [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/]
    },
    username :  {
        type : String,
        require : true,
        unique : true
    },
    password :  {
        type : String,
        require : true,
        minlength: 6,
        maxlength: 20
    },
    phoneNumber :  {
        type : String,
        require : true,
        match : [/^[0-9]{4}-[0-9]{4}$/]
    },
    birthDate :  {
        type : Date,
        require : true
    },
    sex :  {
        type : String,
        require : true,
        enum: ['M', 'F']
    },
    status : {
        type : Boolean,
        require : true,
        default : true
    },
    isVerified : {
        type : Boolean,
        require : true,
        default : false
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Customer", customerSchema)