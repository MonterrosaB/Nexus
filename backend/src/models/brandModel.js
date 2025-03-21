/*
    id,
    name
*/

import { Schema, model } from "mongoose";

const brandSchema = new Schema({
    name : {
        type : String,
        required : true,
        min : 2
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model("Brand", brandSchema)