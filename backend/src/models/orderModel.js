/*
 Campos:
 paymentMethod
 status
 Address
 Total
 Date
idCartProduct

*/

import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    paymentMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/],
    },
    total: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    idCartProduct: {
      type: Schema.Types.ObjectId,
      ref: "CartProduct",
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Order", orderSchema);
