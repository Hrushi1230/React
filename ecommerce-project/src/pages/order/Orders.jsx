import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./orders.css";
import axios from "axios";
import { OrderGrid } from "./OrderGrid";

export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrdersData = async ()=>{
      const response= await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    }
    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders}/>
      </div>
    </>
  );
}
