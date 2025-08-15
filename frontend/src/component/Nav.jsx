import logo from "../assets/vcart logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdOutlineContacts } from "react-icons/md";
import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { ShopDataContext } from "../context/ShopContext";

function Nav() {
  let {  getCurrentUser,userData } = useContext(userDataContext);
  let {serverUrl} = useContext(authDataContext)
  let {showSearch, setShowSearch, search, setSearch, getCartCount} = useContext(ShopDataContext)
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate()


  const handleLogout =  async () => {
    try {
        const result = await axios.get(serverUrl + "/api/auth/logout", {
            withCredentials: true
        })
        console.log(result.data);
        getCurrentUser()
        navigate("/login");

        
    } catch (error) {
        console.log("Logout error:", error);
        
    }
  }
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[20%] lg:w-[30px] flex items-center justify-start gap-[10px]">
        <img src={logo} alt="" className="w-[20px] " />
        <h1 className="text-[22px] text-black font-sans">OneCart</h1>
      </div>
      <div className="w-[50%] lg:w-[40%] hidden md:flex ">
        <ul className="flex items-center justify-center gap-[18px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl " onClick={() => navigate("/")}>
            Home
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={() => navigate("/collection")}>
            Collections
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={() => navigate("/about")}>
            About
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={() => navigate("/contact")}>
            Contact
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-[20px]">
       {!showSearch && <IoSearchCircleOutline className="w-[39px] h-[45px] text-[#000000c9] cursor-pointer" onClick={() => {setShowSearch(prev=>!prev); navigate("/collection")}} /> }
        {showSearch && <IoSearchCircle className="w-[39px] h-[45px] text-[#000000c9] cursor-pointer" onClick={() => setShowSearch(prev=>!prev)} /> }
        {!userData && (
          <CgProfile className="w-[30px] h-[38px] text-[#000000c9] cursor-pointer" onClick={() => setShowProfile(prev=>!prev)} />
        )}
        {userData?.user && (
          <div className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer" onClick={()=>setShowProfile(prev => !prev)}>
            {userData.user.name.slice(0, 1).toUpperCase()}
          </div>
        )}
        <FiShoppingCart className="w-[30px] h-[38px] text-[#000000c9] cursor-pointer hidden md:block" onClick={() => navigate("/cart")} />
        <p className="absolute w-[18px] h-[18px]  items-center justify-center bg-black px-[5px] py-[2px] text-white font-semibold rounded-full text-[9px] top-[8px] right-[18px] hidden md:block" >
          {getCartCount()}
        </p>
      </div>
      {showSearch && (
        <div className="w-[100%]  h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input type="text" placeholder="Search..." className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]" onChange={(e)=>{setSearch(e.target.value)}} value={search} />
        </div>
      )}

     {showProfile && <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10 ">
     <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white ">
        {!userData &&<li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer" onClick={()=>{navigate('/login'); setShowProfile(false);}}>Login</li>}
        {userData && <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer" onClick={()=>{handleLogout(); setShowProfile(false);}}>LogOut</li>}
        <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer" onClick={()=>{navigate('/order'); setShowProfile(false);}}>Order's</li>
        <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer" onClick={() => navigate("/about")}>About</li>
     </ul>
     </div>}
     <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 text-[12px] bg-[#191818] md:hidden">
        <button className="text-white flex items-center justify-center flex-col gap-[2px] "><IoMdHome className="w-[22px] h-[22px] text-white md:hidden" onClick={() => navigate("/")} />Home</button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px] "><BsFillCollectionFill className="w-[20px] h-[20px] text-white md:hidden" onClick={() => navigate("/collection")} />Collections</button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px] "><MdOutlineContacts className="w-[20px] h-[20px] text-white md:hidden" onClick={() => navigate("/contact")} />Contact</button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px] " onClick={() => navigate("/cart")}><FiShoppingCart className="w-[20px] h-[20px] text-white md:hidden" />Cart</button>
        <p className="absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px] " >
          {getCartCount()}
        </p>
     </div>
    </div>
  );
}

export default Nav;
