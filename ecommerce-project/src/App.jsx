import { HomePage } from "./pages/home/HomePage";
import "./App.css";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Orders } from "./pages/order/Orders";
import { Tracking } from "./pages/Tracking";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
   const loadCart = async ()=>{
      const response=await  axios.get("/api/cart-items?expand=product");
       setCart(response.data);
    }

  useEffect(() => {   
      loadCart();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />}>
        {" "}
      </Route>
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />}></Route>
      <Route path="/orders" element={<Orders cart={cart} />}></Route>
      <Route path="/tracking" element={<Tracking cart={cart} />}></Route>
    </Routes>
  );
}

export default App;
