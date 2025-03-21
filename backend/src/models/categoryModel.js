/*
    id,
    name
*/

import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name : {
        type : String,
        require : true,
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model("Category", categorySchema)