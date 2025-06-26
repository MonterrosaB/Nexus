import { Schema, model } from "mongoose";

const wishlistSchema = new Schema(
  {
    idCustomer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    products: [
      {
        idProduct: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        dateAdded: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Wishlist", wishlistSchema);
