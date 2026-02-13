import mongoose from "mongoose";
const { Schema, model } = mongoose;

const wishlistSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Wishlist = model("Wishlist", wishlistSchema);

export default Wishlist;
