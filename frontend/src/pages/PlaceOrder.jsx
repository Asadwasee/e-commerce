import { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/razorpay.png'
import { ShopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/authContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
  let [method, setMethod] = useState('cod');
  let navigate = useNavigate();
  const {cartItem, delivery_fee, getCartAmount, product, setCartItem} = useContext(ShopDataContext);
  let {serverUrl} = useContext(authDataContext)
  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    country: '',
    street: '',
    pinCode: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setFormData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for(const items in cartItem){
        for(const item in cartItem[items]){
          if(cartItem[items][item] > 0){
            const itemInfo = structuredClone(product.find(product => product._id === items));
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let amount = await getCartAmount();
let orderData = {
  address: formData,
  items: orderItems,
  amount: amount + delivery_fee,
}

      switch(method){
        case 'cod':
          const result = await axios.post(serverUrl + '/api/order/placeorder', {orderData}, {withCredentials: true});
          console.log(result.data);
          if(result.data){
            setCartItem({});
            navigate('/order')
          }else{
            console.log(result.data.message);
            
          }
          break;

          default:
            break;
      }
    } catch (error) {
      console.log(error);
      
    }
}

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col md:flex-row gap-[50px] relative '>
      <div className="lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px] ">
        <form onSubmit={onSubmitHandler}  className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%] mb-[15px]">
          <div className="py-[10px]">
            <Title  text1={'Delivery'} text2={'Information'}/>
          </div>
          <div className="w-[100%] h-[70%] flex items-center justify-between px-[10px] mb-[15px] ">
            <input type="text" placeholder='First Name' className='w-[48%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required  onChange={onChangeHandler} name='firstName' value={formData.firstName}/>

            <input type="text" placeholder='Last Name' className='w-[48%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='lastName' value={formData.lastName} />
          </div>

          <div className="w-[100%] h-[70%] flex items-center justify-between px-[10px] mb-[15px] ">
            <input type="text" placeholder='Email Address' className='w-[100%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='email' value={formData.email} />
          </div>

          <div className="w-[100%] h-[70%] flex items-center justify-between px-[10px] mb-[15px] ">
            <input type="text" placeholder='Street Address' className='w-[100%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='street' value={formData.street} />
          </div>

          <div className="w-[100%] h-[70%] flex items-center justify-between px-[10px] mb-[15px] ">
            <input type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='city' value={formData.city} />

            <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='state' value={formData.state}/>
          </div>

          <div className="w-[100%] h-[70%] flex items-center justify-between px-[10px] mb-[15px] ">
            <input type="text" placeholder='Pincode' className='w-[48%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='pinCode' value={formData.pinCode} />

            <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='country' value={formData.country} />
          </div>

          <div className="w-[100%] h-[70%] flex items-center justify-between px-[10px]  ">
            <input type="text" placeholder='Phone' className='w-[100%] h-[50px] rounded-md bg-slate-500 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' required onChange={onChangeHandler} name='phone' value={formData.phone} />
          </div>

          <div>
            <button type='submit'className='text-[18px] text-white active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px] border-[#80808049] ml-[30px] mt-[20px]  ' >Place Order</button>
          </div>
        </form>
      </div>

      <div className=" lg:w-[50%] w-[100%] min-h-[100vh] flex items-center justify-center gap-[30px] ">
          <div className="lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col  ">
            <CartTotal />
            <div className="py-[10px]">
            <Title text1={'Payment'} text2={'Method'} />
          </div>
          <div className="w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-0 justify-center gap-[50px] ">

            <button onClick={()=>setMethod('razorpay')} className={`w-[150px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' : ''}`}><img src={razorpay} alt="" className="w-[100%] h-[100%] object-fill rounded-sm " /></button>
            
            <button onClick={()=>setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ''} `}>Cash on Delivery</button>

          </div>
        </div> 
      </div>
      </div>
  )
}

export default PlaceOrder