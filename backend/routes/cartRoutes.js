import express from 'express';
import isAuth from '../middleware/isAuth.js';
import { addToCart, getUserCart, updateCart, removeCartItem } from '../controller/cartController.js';

const cartRoutes = express.Router();

cartRoutes.post('/get',isAuth,getUserCart);
cartRoutes.post('/add',isAuth,addToCart);
cartRoutes.post('/update',isAuth,updateCart);
cartRoutes.post('/remove', isAuth, removeCartItem);

export default cartRoutes;