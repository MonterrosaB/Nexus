/*
 Campos:
 name
 description
 images
 idCategory
 idBrand
 idProvider 
 stock 
 unitPrice

*/


import {Schema, model} from "mongoose";

const productsSchema = new Schema (

    {
        name: {
       
           type: String, 
           require: true
        },

        description:{
       
            type: String,
            require: true
         },

         images:{
            type: [String], // Array de strings para múltiples imágenes
            validate: {
                validator: function (arr) {
                    return arr.every(url => /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(url));
                },
                message: "Cada imagen debe ser una URL válida de imagen."
            }
        },

         idCategory:{
            type: Schema.Types.ObjectId,
            ref: "categoryModel",
            require: true
         },

         idBrand:{
            type: Schema.Types.ObjectId,
            ref: "brandModel",
            require: true
         },

         idProvider:{
            type: Schema.Types.ObjectId,
            ref: "providerModel",
            require: true
         },

         stock:{
       
            type: Number,
            require: true,
            min: 0 
         },

         unitPrice:{
       
            type: Number,
            require: true,
            min: 0 
         },
       }, {

        timestamps: true,
        strict: false 
       }
);


export default model("Product", productsSchema);