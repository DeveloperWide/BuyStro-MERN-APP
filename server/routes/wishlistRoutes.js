import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { getItems, addItem } from "../controllers/wishlistController.js";
const router = express.Router({});

router.get("/", isAuthenticated, getItems);
router.post("/create", isAuthenticated, addItem);

export default router;
