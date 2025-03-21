/*
_id,
IdClient,
Products
Array (2)

*/

import { Schema, model } from "mongoose";

// Definir un esquema para los elementos dentro del array
const productSchema = new Schema({
    idProduct: { type: Schema.Types.ObjectId,
         required: true,
         ref: "productModel"
        },
    quantity: {
         type: Number,
          default: 1 
    },
    subtotal: {
         type: Number,
          required: true 
        }
  });

const cartProductSchema = new Schema({
    idCustomer : {
        type : String,
        require : true,
        min : 2
    },
    products:
    [productSchema]
},
{
    timestamps : true,
    strict : false
}); 

export default model("CartProduct", cartProductSchema)