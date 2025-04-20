import CheckoutHeader from "./CheckoutHeader";
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import "./TailwindImport.css";
import { formatMoney } from "../../utils/money";

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

                  {/* This is Payment summary block */}
                  {paymentSummary && (
                     <section className="border border-gray-300 w-full md:h-1/2 rounded-lg p-4 flex flex-col gap-2 bg-white shadow-md md:order-2">
                        {/*Main Heading */}
                        <h2 className="text-lg font-medium">Payment Summary</h2>

                        {/*Item + Delivery Charge*/}
                        <div>
                           <div className="flex justify-between">
                              <span className="text-start">Items ({paymentSummary.totalItems}) :</span>
                              <span className="text-end">{formatMoney(paymentSummary.productCostCents)}</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-start">Shipping & handling :</span>
                              <span className="text-end">{formatMoney(paymentSummary.shippingCostCents)}</span>

                           </div>
                        </div>
                        <hr className="w-14 self-end" />
                        {/*Before tax cost and tax applied*/}
                        <div>
                           <div className="flex justify-between">
                              <span className="text-start">Total before tax :</span>
                              <span className="text-end">{formatMoney(paymentSummary.subtotalCents)}</span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-start">Estimated tax (10%) :</span>
                              <span className="text-end">{formatMoney(paymentSummary.taxCents)}</span>
                           </div>
                        </div>
                        <hr />
                        {/*After tax total cost */}
                        <div className="flex justify-between text-blue-700 text-lg font-semibold">
                           <span>Order Total :</span>
                           <span>{formatMoney(paymentSummary.totalCents)}</span>
                        </div>
                        {/* Add to Cart button */}
                        <button className="bg-blue-700 active:bg-blue-900 font-semibold text-md text-white p-2 rounded-lg mt-4 ">
                           Add to cart
                        </button>
                     </section>
                  )}


                  {/* This section contains all the orders */}
                  <section className="flex flex-col gap-4 md:min-w-2/3">
                     {/* Order block */}
                     {deliveryOptions.length > 0 && cart.map((cartItem) => {
                        const selectedDeliveryOption = deliveryOptions.find(
                           (deliveryOption) => {
                              return deliveryOption.id === cartItem.deliveryOptionId
                           }  
                        );
                        return (
                        <section key={cartItem.id} className="flex flex-col border border-gray-300 rounded-lg p-4 w-full bg-white shadow-md gap-2">
                           <span className="text-blue-700 text-xl font-semibold">Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTime).add(selectedDeliveryOption.deliveryDays, 'day').format('MMMM D')}</span>
                           <section className=" flex flex-col md:flex-row gap-4  order-1">

                              {/* Order details */}
                              <section className="flex md:w-3/5 md:gap-4 items-center">
                                 <img className="w-1/2 md:w-1/3" src={cartItem.Product.image} />
                                 <div className="flex flex-col md:flex-grow gap-4">
                                    <span className="text-md md:text-lg font-semibold">{cartItem.Product.name}</span>
                                    <span className="text-lg font-bold">{formatMoney(cartItem.Product.priceCents)}</span>
                                    <span className="text-sm">Quantity: {cartItem.quantity}
                                       <span className="text-blue-700">
                                          <a> Update</a> <a>Delete</a>
                                       </span>
                                    </span>
                                 </div>
                              </section>

                              {/* Delivery options */}
                              <section className="flex flex-col md:gap-2 md:mt-0 gap-4 mt-4">
                                 <span>Choose a delivery option :</span>
                                 {deliveryOptions.map((deliveryOption) => (
                                    <div key={deliveryOption.id} className="flex gap-8 pl-2">
                                       <input className="w-4" type="radio" checked={cartItem.deliveryOptionId === deliveryOption.id} />
                                       <div className="flex flex-col">
                                          <span>
                                             {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('MMMM D')}
                                          </span>
                                          <span className="text-gray-500">
                                             {deliveryOption.priceCents === 0 ? 'FREE Shipping' : formatMoney(deliveryOption.priceCents)}
                                          </span>
                                       </div>
                                    </div>
                                 ))}
                              </section>
                           </section>
                        </section>
                     )})}

                  </section>
               </section>
            </main>
         </div>
      </>
   );
}