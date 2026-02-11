import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { getItems } from "../controllers/wishlistController.js";
const router = express.Router({});

router.get("/", isAuthenticated, getItems);

export default router;
