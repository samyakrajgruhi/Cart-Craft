import CheckoutHeader from "./CheckoutHeader";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./TailwindImport.css";
import PaymentSummary from "./PaymentSummary";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {
   const [cart, setCart] = useState([]);
   const [paymentSummary, setPaymentSummary] = useState(null);
   const [deliveryOptions, setDeliveryOptions] = useState([]);
   useEffect(() => {
      const getCheckoutData = async () => {
         let response = await axios.get('/api/cart-items?expand=product');
         setCart(response.data);

         response = await axios.get('/api/payment-summary');
         setPaymentSummary(response.data);

         response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
         setDeliveryOptions(response.data);
      }

      getCheckoutData();
   }, [])

   return (

      <>
         <div className="pt-16 bg-gray-100">

            <CheckoutHeader />
            {/* Main Body */}

            <main className="p-6  md:w-2/3 md:m-auto flex flex-col gap-4">
               {/* Main Heading */}
               <h1 className="text-2xl font-semibold">Review your order</h1>
               {/* Section which containes the main body. That is, the payment summary and orders */}
               <section className="flex flex-col md:flex-row  gap-4">

                  {/* This section contains all the orders */}
                  <OrderSummary 
                     deliveryOptions={deliveryOptions}
                     cart={cart}
                  />

                  {/* This is Payment summary block */}
                  <PaymentSummary 
                     paymentSummary={paymentSummary}
                  />
   
               </section>
            </main>
         </div>
      </>
   );
}