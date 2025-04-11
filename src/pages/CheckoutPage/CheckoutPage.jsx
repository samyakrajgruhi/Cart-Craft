import CheckoutHeader from "./CheckoutHeader";
import "./TailwindImport.css";

export default function CheckoutPage(){

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
                  <section className="border border-gray-300 w-full md:h-1/2 rounded-lg p-4 flex flex-col gap-2 bg-white shadow-md md:order-2">
                     {/*Main Heading */}
                     <h2 className="text-lg font-medium">Payment Summary</h2>

                     {/*Item + Delivery Charge*/}
                     <div>
                        <div className="flex justify-between">
                           <span className="text-start">Items (3) :</span>
                           <span className="text-end">$42.75</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-start">Shipping & handling :</span>
                           <span className="text-end">$4.99</span>
                           
                        </div>
                     </div>
                     <hr className="w-14 self-end" />
                     {/*Before tax cost and tax applied*/}
                     <div>
                        <div className="flex justify-between">
                           <span className="text-start">Total before tax :</span>
                           <span className="text-end">$47.74</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-start">Estimated tax (10%) :</span>
                           <span className="text-end">$4.77</span>
                        </div>
                     </div>
                     <hr />
                     {/*After tax total cost */}
                     <div className="flex justify-between text-blue-700 text-lg font-semibold">
                        <span>Order Total :</span>
                        <span>$52.51</span>
                     </div>
                     {/* Add to Cart button */}
                     <button className="bg-blue-700 active:bg-blue-900 font-semibold text-md text-white p-2 rounded-lg mt-4 ">
                        Add to cart
                     </button>
                  </section>

                  {/* This section contains all the orders */}
                  <section className="flex flex-col gap-4">

                     {/* Order block */}
                     <section className="flex flex-col border border-gray-300 rounded-lg p-4 w-full bg-white shadow-md gap-2">
                        <span className="text-blue-700 text-xl font-semibold">Delivery date: Tuesday, June 21</span>
                        <section className=" flex flex-col md:flex-row gap-4  order-1">
                           
                           
                           {/* Order details */}
                           <section className="flex md:w-3/5 md:gap-4 items-center">
                              <img className="w-1/2 md:w-1/3" src="./images/products/athletic-cotton-socks-6-pairs.png" />
                              <div className="flex flex-col md:flex-grow gap-4">
                                 <span className="text-md md:text-lg font-semibold">Black and Gray Athletic Cotton Socks - 6 Pairs</span>
                                 <span className="text-lg font-bold">$10.90</span>
                                 <span className="text-sm">Quantity: 2 
                                    <span className="text-blue-700">
                                       <a> Update</a> <a>Delete</a>
                                    </span>
                                 </span>
                              </div>
                           </section>

                           {/* Delivery options */}
                           <section className="flex flex-col md:gap-2 md:mt-0 gap-4 mt-4">
                              <span>Choose a delivery option :</span>
                              
                              <div className="flex gap-8 pl-2">
                                 <input className="w-4" type="radio" />
                                 <div className="flex flex-col">
                                    <span>
                                       Tuesday, June 21
                                    </span>
                                    <span className="text-gray-500">
                                       FREE Shipping
                                    </span>
                                 </div>
                              </div>

                              <div className="flex gap-8 pl-2">
                                 <input className="w-4" type="radio" />
                                 <div className="flex flex-col">
                                    <span>
                                       Tuesday, June 22
                                    </span>
                                    <span className="text-gray-500">
                                       $4.99 - Shipping
                                    </span>
                                 </div>
                              </div>

                              <div className="flex gap-8 pl-2">
                                 <input className="w-4" type="radio" />
                                 <div className="flex flex-col">
                                    <span>
                                       Tuesday, June 23
                                    </span>
                                    <span className="text-gray-500">
                                       $9.99 - Shipping
                                    </span>
                                 </div>
                              </div>
                           </section>
                        </section>
                     </section>

                     {/* Order Block */}
                     <section className="flex flex-col border border-gray-300 rounded-lg p-4 w-full bg-white shadow-md gap-2">
                        <span className="text-blue-700 text-xl font-semibold">Delivery date: Tuesday, June 21</span>
                        <section className=" flex flex-col md:flex-row gap-4  order-1">
                           
                           
                           {/* Order details */}
                           <section className="flex md:w-3/5 md:gap-4 items-center">
                              <img className="w-1/2 md:w-1/3" src="./images/products/intermediate-composite-basketball.png" />
                              <div className="flex flex-col md:flex-grow gap-4">
                                 <span className="text-md md:text-lg font-semibold">Intermediate Size  BasketBall</span>
                                 <span className="text-lg font-bold">$20.90</span>
                                 <span className="text-sm">Quantity: 1 
                                    <span className="text-blue-700">
                                       <a> Update</a> <a>Delete</a>
                                    </span>
                                 </span>
                              </div>
                           </section>

                           {/* Delivery options */}
                           <section className="flex flex-col md:gap-2 md:mt-0 gap-4 mt-4">
                              <span>Choose a delivery option :</span>
                              
                              <div className="flex gap-8 pl-2">
                                 <input className="w-4" type="radio" />
                                 <div className="flex flex-col">
                                    <span>
                                       Tuesday, June 21
                                    </span>
                                    <span className="text-gray-500">
                                       FREE Shipping
                                    </span>
                                 </div>
                              </div>

                              <div className="flex gap-8 pl-2">
                                 <input className="w-4" type="radio" />
                                 <div className="flex flex-col">
                                    <span>
                                       Tuesday, June 22
                                    </span>
                                    <span className="text-gray-500">
                                       $4.99 - Shipping
                                    </span>
                                 </div>
                              </div>

                              <div className="flex gap-8 pl-2">
                                 <input className="w-4" type="radio" />
                                 <div className="flex flex-col">
                                    <span>
                                       Tuesday, June 23
                                    </span>
                                    <span className="text-gray-500">
                                       $9.99 - Shipping
                                    </span>
                                 </div>
                              </div>
                           </section>
                        </section>
                     </section>                  
                  </section>
               </section>
            </main>
         </div>
      </>
   );
}