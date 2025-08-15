import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Nav from "./component/Nav.jsx"
import { useContext } from "react"
import { userDataContext } from "./context/UserContext.jsx"
import About from "./pages/About.jsx"
import Collection from "./pages/Collection.jsx"
import Contact from "./pages/Contact.jsx"
import Product from "./pages/Product.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Cart from "./pages/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder.jsx"
import Order from "./pages/Order.jsx"
import NotFound from "./pages/NotFound.jsx"
import Ai from "./component/Ai.jsx"

function App() {
   let {userData} = useContext(userDataContext)
   let location = useLocation()
  return (
    <>
   {userData && <Nav/>}
    <Routes>
        <Route path="/singup" element= {userData ? (<Navigate to={location.state?.from || "/"}/>)
        : (<Registration/>)} />

        <Route path="/login" element= {userData ? (<Navigate to={location.state?.from || "/"}/>)
        : (<Login/>) } />

        <Route path="/" element= {userData ? (<Home/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/about" element= {userData ? (<About/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/collection" element= {userData ? (<Collection/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/contact" element= {userData ? (<Contact/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/contact" element= {userData ? (<Contact/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />
        
        <Route path="/product" element= {userData ? (<Product/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/productdetails/:productId" element= {userData ? (<ProductDetails/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/cart" element= {userData ? (<Cart/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/placeorder" element= {userData ? (<PlaceOrder/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="/order" element= {userData ? (<Order/>) : (<Navigate to="/login" state={{from: location.pathname}} />)} />

        <Route path="*" element={<NotFound/>} />

    </Routes>
    <Ai />
    </>
  )
}

export default App