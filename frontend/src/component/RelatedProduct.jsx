import { useContext, useEffect, useState } from "react"
import { ShopDataContext } from "../context/ShopContext"
import Title from "./Title";
import Card from "./Card";


function RelatedProduct({category, subCategory, currentProductId}) {

    let {product} = useContext(ShopDataContext);
    let [related , setRelated] = useState([]);

    useEffect(() =>{
      if(product.length > 0){

        let productCopy = product.slice()
        productCopy = productCopy.filter((item) => category === item.category )
        productCopy = productCopy.filter((item) => subCategory === item.subCategory )
        productCopy = productCopy.filter((item) => currentProductId !== item._id )
        setRelated(productCopy.slice(0,4)) 
      }
    },[product, category, subCategory, currentProductId])
  return (
    <div className="my-[130px] md:my-[40px] md:px-[60px] ">
        <div className="ml-[20px] lg:ml-[80px] ">
            <Title text1="Related" text2="Products" />
        </div>
    <div className="w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px] ">
        {
            related.map((item, index) =>(
                <Card key={index} name={item.name} id={item._id} image={item.image1 || item.image} price={item.price} />
            ))
        }
    </div>
    </div>
  )
}

export default RelatedProduct