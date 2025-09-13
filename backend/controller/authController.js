import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";

export const registration = async (req, res) => {
    try {
                console.log("Received body:", req.body); // 👈 Add this
        const { name, email, password } = req.body;
        const exisUser = await User.findOne({ email})
        if (exisUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if(!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Enter strong password" });
        }
        let hashPassword =  await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashPassword
        });
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            secure: true,
            sameSite: "none",
        });
        res.status(201).json(user)
    } catch (error) {
       console.log("registration error", error);
       return res.status(500).json({ message: `registration error ${error}`})
        
    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await User.findOne({ email})
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            secure: true,
            sameSite: "none",
        });
        res.status(201).json(user);
    } catch (error) {
        console.log("login error", error);
       return res.status(500).json({ message: `login error ${error}`})
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log("logout error", error);
        return res.status(500).json({ message: `logout error ${error}`})
    }
}

export const googleLogin = async (req, res) => {
    try {
        let { name, email } = req.body;
         let user = await User.findOne({ email})
        if (!user) {
        user = await User.create({
                name,
                email})     
        }
         
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            secure: true,
            sameSite: "none",
        });
       return res.status(200).json(user);

    } catch (error) {
        console.log("googleLogin error", error);
        return res.status(500).json({ message: `Google Login error ${error}`})
        
    }
}


export const adminLogin = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
            let token = await genToken1(email);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
            secure: false,
            sameSite: "strict",
        });
        res.status(201).json({ message: "Admin login successful" });
    } else {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    } catch (error) {
        console.log("adminLogin error", error);
        return res.status(500).json({ message: `adminLogin error ${error}` });
    }
}

export const getAdmin = async (req, res) => {
    try {
        let adminEmail = req.adminEmail;
        if(!adminEmail) {
            return res.status(404).json({ message: "Admin is  not found" });
        }
        return res.status(201).json({ email: adminEmail, role: "admin"})
    } catch (error) {
        console.log("getAdmin error", error);
        return res.status(500).json({ message: `getAdmin error ${error}` });
    }
}

    
