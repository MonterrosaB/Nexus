/*
_id,
IdClient,
Products
Array (2)

*/

import { Schema, model } from "mongoose";

// Definir un esquema para los elementos dentro del array
const productSchema = new Schema({
  idProduct: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
  quantity: {
    type: Number,
    default: 1,
  },
  subtotal: {
    type: Number,
    required: true,
  },
});

const cartProductSchema = new Schema(
  {
    idCustomer: {
      type: String,
      required: true,
      min: 2,
    },
    products: [productSchema],
    status: {
      type: String,
      required: true,
      enum: ["active", "completed"],
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("CartProduct", cartProductSchema);
