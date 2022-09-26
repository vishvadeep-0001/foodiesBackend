import express from "express";
import { getAdminOrders, getMyOrders, getOrderDetails, paymentVerification, placeOrder, placeOrderOnline, processOrder } from "../controllers/order.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/createorder",isAuthenticated, placeOrder)
// place order online
router.post("/createorderonline",isAuthenticated, placeOrderOnline)
router.post("/paymentverification",isAuthenticated, paymentVerification)

router.get("/myorders", isAuthenticated, getMyOrders)
router.get("/order/:id", isAuthenticated, getOrderDetails)

// Add admin middleware for only accesible for admin -----this route only use for admin
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders)
// Shipped to deliver option route --only use for admin
router.get("/admin/order/:id", isAuthenticated,authorizeAdmin, processOrder)

export default router;
 