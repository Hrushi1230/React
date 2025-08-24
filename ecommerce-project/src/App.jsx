import { HomePage } from './pages/HomePage'
import './App.css';
import {Routes , Route} from 'react-router';
import { CheckoutPage } from './pages/CheckoutPage';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/tracking';

function App() {

  return (
    <Routes>
      <Route path='/' element={ <HomePage/>}>  </Route>
      <Route path='/checkout' element={<CheckoutPage/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/tracking' element={<Tracking/>}></Route>
    </Routes>
  )
}

export default App
