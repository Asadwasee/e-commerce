
import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js";

export const addProduct = async (req, res) => {
    try {
        let {name, price, description, category, subCategory, sizes, bestSeller} = req.body;
        let image1 = await uploadOnCloudinary(req.files.image1[0].path)
        let image2 = await uploadOnCloudinary(req.files.image2[0].path);    
        let image3 = await uploadOnCloudinary(req.files.image3[0].path);
        let image4 = await uploadOnCloudinary(req.files.image4[0].path);
        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestSeller: bestSeller === 'true' ? true : false,
            image1,
            image2, 
            image3,
            image4,
            date: Date.now()
        };

        const product = await Product.create(productData);
        res.status(201).json({message: "Product added successfully", product});
    } catch (error) {
        console.log("Error in addProduct:", error);
        res.status(500).json({message: `AddProduct error: ${error}`});
    }
}

export const listProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product);
    } catch (error) {
        console.log("Error in listProduct:", error);
        res.status(500).json({message: `ListProduct error: ${error}`});
    }
}

export const removeProduct = async (req, res) => {
    try {
        let {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json({message: "Product removed successfully", product});
    } catch (error) {
        console.log("Error in removeProduct:", error);
        res.status(500).json({message: `RemoveProduct error: ${error}`});
    }
}