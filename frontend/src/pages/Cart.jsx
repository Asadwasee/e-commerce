import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Fill } from "react-icons/ri";
import CartTotal from '../component/CartTotal';



function Cart() {
    const { product, currency, cartItem, updateQuantity, removeFromCart } = useContext(ShopDataContext);
    const [cartData, setCartData] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        const tempData = [];
        for (const items in cartItem){
            for (const item in cartItem[items]){
                if(cartItem[items][item] > 0){
                    tempData.push({
                       _id: items,
                        size: item,
                        quantity: cartItem[items][item]
                    })
                }
            }
        }
        setCartData(tempData);
    },[cartItem]);

    // Controlled input for quantity
    const handleQuantityChange = (itemId, size, value) => {
        if (value === '' || value === '0') return;
        updateQuantity(itemId, size, Number(value));
    };

    return (
        <div className='w-[100%] min-h-[100%] bg-gradient-to-l from-[#141414] to-[#0c2025] p-[20px] overflow-hidden '>
            <div className="h-[8%] w-[100%] text-center mt-[80px] ">
                <Title text1={"Your"} text2={"Cart"} />
            </div>
            <div className="h-[92%] w-[100%] flex flex-wrap gap-[20px] ">
                {
                    cartData.map((item, index) => {
                        const productData = product.find((product) => product._id === item._id);
                        if (!productData) return null;
                        return (
                            <div key={index} className="w-[100%] h-[10%] border-t border-b] ">
                                <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative ">
                                    <img className='w-[100px] h-[100px] rounded-md ' src={productData.image1} alt=""  />
                                    <div className="flex items-start justify-center flex-col gap-[10px] ">
                                        <p className='md:text-[23px] text-[17px] font-semibold text-[#f3f9fc] '> {productData.name} </p>
                                        <div className="flex items-center gap-[20px] ">
                                            <p className='text-[20px] text-[#aaf4ef] '> {currency} {productData.price} </p>
                                            <p className='w-[40px] h-[40px] text-[15px] text-white bg-[#518080b1]  rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9] '>{item.size}</p>
                                        </div>
                                    </div>
                                    <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        className='md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] font-semibold bg-[#518080b4] absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-[#9ff9f9] rounded-md '
                                        onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
                                    />
                                    <RiDeleteBin6Fill
                                        className='text-[#9ff9f9] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1'
                                        onClick={() => removeFromCart(item._id, item.size)}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-start items-end my-20 ">
                <div className="w-full sm:w-[450px] ">
                    <CartTotal />
                    <button className='text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] ml-[30px] mt-[20px] '
                        onClick={() => {
                            if (cartData.length > 0) {
                                navigate("/placeorder")
                            } else {
                                console.log("Cart is empty");
                            }
                        }}
                    >Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart 