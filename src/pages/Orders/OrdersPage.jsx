import "./TailwindImport.css";
import Header from "../../components/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderHeader from "./OrderHeader.jsx";
import OrderItem from "./OrderItem.jsx";


export default function OrdersPage({cart,loadCart}) {
   const [ordersData, setOrdersData] = useState([]);
   useEffect(() => {
      const getOrdersData = async () => {
         const response = await axios.get("/api/orders?expand=product");
         setOrdersData(response.data);
      }
      getOrdersData();

   }, [cart]);

   return (
      <>
         <div className="pt-6 md:pt-14">
            <Header />

            <main className="py-2 px-4 flex flex-col gap-6 md:w-2/3 md:mx-auto">

               <span className="font-bold text-2xl">Your Orders</span>

               {ordersData.map((order) => (
                  <section key={order.id} className="border border-gray-300 shadow-md flex flex-col gap-12 md:gap-4" >
                     {/* Order Header */}
                     <OrderHeader order={order} />
                  
                     {/* Item */}
                     <OrderItem order={order} loadCart={loadCart} />
                  </section>  
               ))}

            </main>
            
         </div>
      </>
   );
}

