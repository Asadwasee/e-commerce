import User from "../model/userModel.js"
export const removeCartItem = async (req, res) => {
    try {
        console.log("removeCartItem", { userId: req.userId, body: req.body });
        const {itemId, size} = req.body;
        const userData = await User.findById(req.userId);
        let cartData = userData.cartData || {};
        if (cartData[itemId]) {
            if (size) {
                delete cartData[itemId][size];
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            } else {
                delete cartData[itemId];
            }
        }
        userData.cartData = cartData;
        userData.markModified('cartData');
        await userData.save();
        return res.status(200).json({message: "Item removed from cart"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: `removeCartItem error: ${error.message}`});
    }
};


export const addToCart = async (req, res) => {
    try {
        console.log("addToCart", { userId: req.userId, body: req.body });
        const {itemId, size} = req.body;
        const userData = await User.findById(req.userId);
        //check if user exists
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        //ensure cartData is initialized
        let cartData = userData.cartData || {};
        if(cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        userData.cartData = cartData;
        userData.markModified('cartData');
        await userData.save();
        return res.status(201).json({message: "Item added to cart"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: `addToCart error: ${error.message}`});
    }
};

export const updateCart = async (req, res) => {
    try {
        console.log("updateCart", { userId: req.userId, body: req.body });
        const {itemId, size, quantity} = req.body;
        const userData = await User.findById(req.userId);
        let cartData = userData.cartData || {};
        if (cartData[itemId]) {
            if (quantity > 0) {
                cartData[itemId][size] = quantity;
            } else {
                // Remove size from item
                delete cartData[itemId][size];
                // If no sizes left, remove item
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
        }
        userData.cartData = cartData;
        userData.markModified('cartData');
        await userData.save();
        return res.status(201).json({message: "Cart updated"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: `updateCart error: ${error.message}`});
    }
};

export const getUserCart = async (req, res) => {
    try {
        const userData = await User.findById(req.userId);
        let cartData = await userData.cartData;
        return res.status(200).json({cartData});
    } catch (error) {
        log(error);
        return res.status(500).json({message: `getUserCart error: ${error.message}`});
    }
};