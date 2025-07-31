import express from 'express'
import { placeOrder, placeOrdersStripe, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features

orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrdersStripe)

// User Features
orderRouter.post('/userorders', authUser, userOrders)

// Verify Stripe
orderRouter.post('/verifyStripe',authUser, verifyStripe)
export default orderRouter