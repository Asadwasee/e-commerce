import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopDataContext } from '../context/ShopContext'
import Card from './Card';

function BestSeller() {
  let { product } = useContext(ShopDataContext);
  let [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
  let filterProduct = product.filter((item) => item.bestSeller);
  setBestSellers(filterProduct.slice(0, 4));
  },[product]);
  return (
    <div>
      <div className="h-[8%] w-[100%] text-center mt-[50px] ">
        <Title text1={"Best"} text2={"Seller"} />
        <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100 '>Tried Tested, Loved Discover Our All-Time Best Sellers.</p>
      </div>
      <div className="w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px] ">
        {
          bestSellers.map((item, index) => (
            <Card key={index} name={item.name} id={item._id} image={item.image1 || item.image} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller