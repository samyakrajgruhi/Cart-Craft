import "./TailwindImport.css";
import Header from "../components/Header.jsx";
import { NavLink } from "react-router";

export default function OrdersPage() {

   return (
      <>
         <div className="pt-6 md:pt-14">
            <Header />


            <main className="py-2 px-4 flex flex-col gap-6 md:w-2/3 md:mx-auto">
               <span className="font-bold text-2xl">Your Orders</span>

               {/* Order Block */}
               <section className="border border-gray-300 shadow-md flex flex-col gap-12 md:gap-4">
                  {/* Order header */}
                  <section className="border-b border-gray-300 p-4 flex flex-col text-lg md:text-md md:flex-row md:justify-between md:items-center md:gap-4">
                     <div className="md:flex md:flex-col">
                        <span className="font-semibold">Order Placed: </span>
                        <span>August 12</span>
                     </div>
                     <div className="md:flex md:flex-col">
                        <span className="font-semibold">Total: </span>
                        <span>$35.06</span>
                     </div>
                     <div className="md:flex md:flex-col">
                        <span className="font-semibold">Order ID: </span>
                        <span>23bce3-7aknds8-cdas4</span>
                     </div>
                  </section>

                  {/* Item */}
                  <section className="flex flex-col md:flex-row md:items-start gap-4 p-4 ">
                     <img className="w-64 md:w-56 mx-auto" src="./images/products/athletic-cotton-socks-6-pairs.jpg" />
                        <section className="flex flex-col gap-4 md:w-3/5">
                           <section className="px-2 text-lg md:text-md">
                              <p className="font-semibold text-xl ">Black and Gray Athletic Cotton Socks - 6 pairs</p>
                              <p className="mt-4"><span>Arriving on :</span> August 12</p>
                              <p><span>Quantity :</span> 1</p>
                           </section>
                           <button className="bg-blue-500 w-full md:w-2/3 rounded-lg p-2 text-center text-white text-lg md:text-md">Add To Cart</button>
                        </section>
                        <NavLink to="/tracking" className="border-2 border-gray-300 w-full md:w-1/3 rounded-lg p-2 text-center text-lg md:text-md">Track Package</NavLink>
                  </section>

                  {/* Item */}
                  <section className="flex flex-col md:flex-row md:items-start gap-4 p-4 ">
                     <img className="w-64 md:w-56 mx-auto" src="./images/products/intermediate-composite-basketball.jpg" />
                        <section className="flex flex-col gap-4 md:w-3/5">
                           <section className="px-2 text-lg md:text-md">
                              <p className="font-semibold text-xl ">Intermediate Sized Basketball</p>
                              <p><span>Arriving on :</span> August 12</p>
                              <p><span>Quantity :</span> 1</p>
                           </section>
                           <button className="bg-blue-500 w-full md:w-2/3 rounded-lg p-2 text-white text-lg md:text-md">Add To Cart</button>
                        </section>
                        <NavLink to="/tracking" className="border-2 border-gray-300 w-full md:w-1/3 rounded-lg p-2 text-center text-lg md:text-md">Track Package</NavLink>
                  </section>

               </section>

               {/* Order Block */}
               <section className="border border-gray-300 shadow-md flex flex-col gap-12 md:gap-4 mb-4">
                  {/* Order header */}
                  <section className="border-b border-gray-300 p-4 flex flex-col text-lg md:text-md md:flex-row md:justify-between md:items-center md:gap-4">
                     <div className="md:flex md:flex-col">
                        <span className="font-semibold">Order Placed: </span>
                        <span>August 15</span>
                     </div>
                     <div className="md:flex md:flex-col">
                        <span className="font-semibold">Total: </span>
                        <span>$42.99</span>
                     </div>
                     <div className="md:flex md:flex-col">
                        <span className="font-semibold">Order ID: </span>
                        <span>23bce3-7aknds-jokw3</span>
                     </div>
                  </section>

                  {/* Item */}
                  <section className="flex flex-col md:flex-row md:items-start gap-4 p-4 ">
                     <img className="w-64 md:w-56 mx-auto" src="./images/products/luxury-towel-set.jpg" />
                        <section className="flex flex-col gap-4 md:w-3/5">
                           <section className="px-2 text-lg md:text-md">
                              <p className="font-semibold text-xl ">White Luxury Towel</p>
                              <p className="mt-4"><span>Arriving on :</span> August 16</p>
                              <p><span>Quantity :</span> 2</p>
                           </section>
                           <button className="bg-blue-500 w-full md:w-2/3 rounded-lg p-2 text-white text-lg md:text-md">Add To Cart</button>
                        </section>
                        <NavLink to="/tracking" className="border-2 border-gray-300 w-full md:w-1/3 rounded-lg p-2 text-center text-lg md:text-md">Track Package</NavLink>
                  </section>
               </section>

            </main>

         </div>
      </>
   );
}

