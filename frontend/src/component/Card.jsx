import React from 'react'
import { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name, image, id, price}) {
    let {currency} = useContext(ShopDataContext) 
    let navigate = useNavigate()
  return (
    <div className='w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049] ' onClick={()=>navigate(`/productdetails/${id}`)}>
<img src={image} alt={name || "No Name"} className='w-[100%] h-[80%] rounded-sm object-cover' />
      <div className='text-[16px] text-[#c3f6fa] py-[10px] '>{name}</div>
      <div className='text-[14px] text-[#c3f6fa]'>{currency}{price}</div>
    </div>
  )
}

export default Card