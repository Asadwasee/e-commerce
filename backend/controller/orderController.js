import Order from "../model/orderModel.js";
import User from "../model/userModel.js";

// for user
export const placeOrder = async (req, res) => {
    try {
        
        const { items, amount, address } = req.body.orderData;

        const userId = req.userId;

        const orderData = {
            items,
            amount,
            address,
            userId,
            date: Date.now(),
            paymentMethod: "COD",
            payment: false
        };

        const newOrder = new Order(orderData);
        await newOrder.save();

        await User.findByIdAndUpdate(userId, { cartData: {} });

        return res.status(201).json({ message: "Order placed successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `PlaceOrder error: ${error.message}` });
    }
};

export const userOrders = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({ userId });
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `UserOrders error: ${error.message}` });
    }
};

// for admin
export const allOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        return res.status(200).json({orders});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "adminOrders error"});
        
    }
}

export const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;
        await Order.findByIdAndUpdate(orderId, {status});
        return res.status(200).json({message: "Status updated"});
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}