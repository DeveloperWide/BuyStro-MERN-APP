import Wishlist from "../models/Wishlist.js";

export const getItems = async (req, res) => {
  try {
    if (!req.user.userId) {
      return res.status(404).json({
        message: "404: User Not Found",
      });
    }
    console.log("userId : ", req.user.userId);
    const wishlist = await Wishlist.findOne({ user: req.user.userId });

    if (!wishlist)
      return res.status(404).json({ message: "404: No wishlist Found" });

    return res.status(200).json({
      message: "All wishlists Items",
      wishlist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
