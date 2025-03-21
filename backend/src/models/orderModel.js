/*
 Campos:
 paymentMethod
 status
 Address
 Total
 Date
idCartProduct

*/


import {Schema, model} from "mongoose";

const orderSchema = new Schema (

    {
        paymentMethod: {
       
           type: String, 
           require: true
        },

        status:{
       
            type: String,
            require: true
         },

         email :  {
            type : String,
            require : true,
            unique : true,
            match : [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/]
        },

         total:{
       
            type: Number,
            require: true
         },
         date:{
       
            type: String,
            require: true
         },
         

         idCartProduct:{
            type: Schema.Types.ObjectId,
            ref: "Category",
            require: true
         },
       }, {

        timestamps: true,
        strict: false 
       }
);


export default model("Order", orderSchema);