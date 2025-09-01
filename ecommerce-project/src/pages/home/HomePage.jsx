import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Header } from '../../components/Header'
import './HomePage.css'
import { HomeGrid } from './HomeGrid';

export function HomePage({ cart }){
     
    const [products ,setProducts] =useState([]);
    
    useEffect(()=>{
        const getHomeData = async ()=>{
           const response= await axios.get('/api/products');
           setProducts( response.data);
        };
       
       getHomeData();
    },[]);

    return(
        <>
        <Header cart={cart}/>
        <div className="home-page">
        <HomeGrid products={products}/>
        </div>
      </>
    )
}