import { HomePage } from './pages/HomePage'
import './App.css';
import {Routes , Route} from 'react-router';
import { CheckoutPage } from './pages/CheckoutPage';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/tracking';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [cart,setCart] =useState([]);
       useEffect(()=>{
       axios.get('/api/cart-items?expand=product')
          .then((response)=>{
            setCart(response.data)
           
          })
        },[]);

 console.log(cart);
  return (
    <Routes>
      <Route path='/' element={ <HomePage cart={cart}/>}>  </Route>
      <Route path='/checkout' element={<CheckoutPage cart={cart}/>}></Route>
      <Route path='/orders' element={<Orders cart={cart}/>}></Route>
      <Route path='/tracking' element={<Tracking/>}></Route>
    </Routes>
  )
}

export default App
