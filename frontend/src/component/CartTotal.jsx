import React, { useContext } from 'react'
import Title from './Title'
import { ShopDataContext } from '../context/ShopContext'

function CartTotal() {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopDataContext)
  return (
    <div className='w-full lg:ml-[30px] '>
        <div className="text-xl py-[10px] ">
            <Title text1={'Cart'} text2={'Total'} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm p-[30px] border-[2px] border-[#4d8890] ">
            <div className="flex justify-between text-white text-[18px] p-[10px] ">
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
        
        <hr />
        <div className="flex justify-between text-white text-[18px] p-[10px] ">
            <p>Delivery Fee</p>
            <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between text-white text-[18px] p-[10px] ">
        <b>Total</b>
        <b>{currency}{getCartAmount()=== 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
            </div>
        </div>
       </div>
  )
}

export default CartTotal