import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
let port = process.env.PORT || 6000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:5173" , "http://localhost:5174"], // Update this to your frontend's URL
    credentials: true, // This allows cookies to be sent with requests
}))
app.get('/',(req,res)=>{
    res,.send({
       activeStatus:true,
        error:false,
    })
}

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB()
    });
