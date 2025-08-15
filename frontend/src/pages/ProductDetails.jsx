import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopDataContext } from "../context/ShopContext";
import RelatedProduct from "../component/RelatedProduct";

function ProductDetails() {
  let { productId } = useParams();
  let { product, currency, addtoCart } = useContext(ShopDataContext);
  let [productData, setProductData] = useState(false);
  let [image, setImage] = useState("");
  let [image1, setImage1] = useState("");
  let [image2, setImage2] = useState("");
  let [image3, setImage3] = useState("");
  let [image4, setImage4] = useState("");
  let [size, setSize] = useState("");

  const fetchProductData = async () => {
    product.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setImage(item.image1);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, product]);
  return productData ? (
    <div>
      <div className="w-full min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col lg:flex-row items-center justify-start gap-[20px] ">
        <div className="w-full lg:w-[50%] flex flex-col-reverse lg:flex-row items-center justify-center gap-[10px] mt-[70px] ">
          <div className="w-full lg:w-[20%] flex flex-row lg:flex-col items-center justify-center gap-[8px] flex-wrap ">
            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md ">
              <img
                src={image1}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md "
                onClick={() => setImage(image1)}
              />
            </div>

            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md ">
              <img
                src={image2}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md "
                onClick={() => setImage(image2)}
              />
            </div>

            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md ">
              <img
                src={image3}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md "
                onClick={() => setImage(image3)}
              />
            </div>

            <div className="w-[60px] h-[60px] md:w-[100px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md ">
              <img
                src={image4}
                alt=""
                className="w-[100%] h-[100%]  cursor-pointer rounded-md "
                onClick={() => setImage(image4)}
              />
            </div>
          </div>

          <div className="w-full lg:w-[60%] h-[220px] md:h-[350px] lg:h-[78%] border-[1px] border-[#80808049] rounded-md overflow-hidden flex items-center justify-center ">
            <img
              src={image}
              alt=""
              className="w-[100%] h-[100%] lg:h-[100%] text-2xl text-white text-center rounded-md object-fill "
            />
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col items-start justify-start py-[20px] px-[10px] md:px-[30px] gap-[10px] lg:mt-[80px] ">
          <h1 className="text-[40px] font-semibold text-[aliceblue] ">
            {productData.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-1">
            <FaStar className="text-[20px] fill-[#FFD700] " />
            <FaStar className="text-[20px] fill-[#FFD700] " />
            <FaStar className="text-[20px] fill-[#FFD700] " />
            <FaStar className="text-[20px] fill-[#FFD700] " />
            <FaRegStarHalfStroke className="text-[20px] fill-[#FFD700] " />
            <p className="text-[18px] font-semibold pl-[5px] text-white ">
              (126)
            </p>
          </div>
          <p className="text-[30px] font-semibold pl-[5px] text-white ">
            {currency} {productData.price}
          </p>
          <p className="w-[80%] md:w-[60%] text-[18px] font-semibold pl-[5px] text-white ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-[10px] my-[10px]">
            <p className="text-[22px] font-semibold pl-[5px] text-white ">
              Select Size
            </p>
            <div className="flex gap-2 ">
              
              {(Array.isArray(productData?.sizes)
                ? productData.sizes
                : productData?.sizes?.split(",") || []
              ).map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-slate-300 rounded-md ${
                    item === size ? "bg-black text-[#2f97f1] text-[20px]" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}{" "}
            </div>
            <button className="text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] text-white rounded-2xl mt-[10px] border-[1px] border-[#80808049] shadow-md shadow-black " onClick={() => addtoCart(productData._id, size)}>Add To Cart</button>
          </div>
          <div className="w-[90%] h-[1px] bg-slate-700 "></div>
          <div className="w-[90%] text-[16px] text-white font-extralight">
            <p>100% Original Product.</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy 30 days returns and exchanges</p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-start justify-start overflow-x-hidden ">
        <div className="flex flex-col md:flex-row px-[10px] md:px-[20px] mt-[40px] md:mt-[90px] lg:ml-[80px] ml-0 lg:mt-0 gap-2 ">
          <p className="border px-5 py-3 text-sm text-white"> Description</p>
          <p className="border px-5 py-3 text-sm text-white"> Reviews (126)</p>
        </div>
        <div className="w-full md:w-[80%] h-[180px] md:h-[150px] lg:h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[16px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[0] mt-2 ">
          <p className="w-full h-full flex items-center justify-center ">
            Upgrade your wardrobe with the latest trends and styles from our online store. Shop now and discover the perfect look for you. Easy to maintain, comfortable to wear, and stylish to wear. Shop with us and find the perfect fit for you. 
          </p>
        </div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />
      </div>

    </div>
  ) : (
    <div className="opacity-0 "></div>
  );
}

export default ProductDetails;
