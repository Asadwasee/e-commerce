import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"
import { authDataContext } from "./authContext";
import axios from "axios";
import { useEffect } from "react";
import { userDataContext } from "./UserContext";

export const ShopDataContext = createContext();

function ShopContext({ children }) {

    let [product, setProduct] = useState([]);
    let [search, setSearch] = useState('');
    let {userData} = useContext(userDataContext)
    let [showSearch, setShowSearch] = useState(false);
    let {serverUrl} = useContext(authDataContext);
    let [cartItem, setCartItem] = useState({});
    let currency = "RS ";
    let delivery_fee = 50;

    const getProduct = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log("Product list:", result.data);
            setProduct(result.data);
        } catch (error) {
            console.error("Error fetching product list:", error);
        }
    }

    const addtoCart = async (itemId, size)=>{
    if (!size){
      console.log('Select Product Size');
      return
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size] = 1;
      }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
    
    if (userData){
      try {
       let result =  await axios.post(serverUrl + '/api/cart/add', {itemId, size}, {withCredentials: true});
        console.log(result.data);
        await getUserCart();
      
      } catch (error) {
        console.log(error);
        
      }
    }
    }

    const updateQuantity = async(itemId, size, quantity)=>{
      let cartData = structuredClone(cartItem);
      cartData[itemId][size] = quantity;
      setCartItem(cartData);
      if(userData){
        try {
          await axios.post(serverUrl + '/api/cart/update', { itemId, size, quantity }, { withCredentials: true });
          await getUserCart(); // sync after update
        } catch (error) {
          console.log(error);
        }
      }
    }

    // Remove item or size from cart
    const removeFromCart = async(itemId, size)=>{
      let cartData = structuredClone(cartItem);
      if(cartData[itemId]){
        if(size){
          delete cartData[itemId][size];
          if(Object.keys(cartData[itemId]).length === 0){
            delete cartData[itemId];
          }
        }else{
          delete cartData[itemId];
        }
        setCartItem(cartData);
      }
      if(userData){
        try {
          await axios.post(serverUrl + '/api/cart/remove', { itemId, size }, { withCredentials: true });
          await getUserCart(); // sync after remove
        } catch (error) {
          console.log(error);
        }
      }
    }

    const getUserCart = async () => {
      try {
        let result = await axios.post(serverUrl + '/api/cart/get', {}, {withCredentials: true});
        setCartItem(result.data.cartData || {}); // fallback to empty object
      } catch(error){
        console.log(error);
      }
    }

    const getCartCount = () =>{
      let totalCount = 0;
      for(const items in cartItem){
        for(const item in cartItem[items]){
          try {
            if(cartItem[items][item] > 0){
              totalCount += cartItem[items][item];
            }
          } catch (error) {
            
          }
          
        }
    }
    return totalCount;
    }

    const getCartAmount = () =>{
      let totalAmount = 0;
      for(const items in cartItem){
        let itemInfo = product.find((products) => products._id === items);
        for (const item in cartItem[items]){
          try {
            if (cartItem[items][item] > 0 && itemInfo && itemInfo.price){
              totalAmount += itemInfo.price * cartItem[items][item];
            }
          } catch (error) {
            console.log(error);
            
          }
        }
      }
      return totalAmount;
    }

    useEffect(() => {
        getProduct();
    }, []);
    useEffect(()=>{
      getUserCart();
    },[])
    

    let value = {
        product,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        getProduct,
        cartItem,
        addtoCart,
        getCartCount,
        setCartItem,
        updateQuantity,
        getCartAmount,
        removeFromCart // Make sure this is included!
    }
  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  )
}

export default ShopContext