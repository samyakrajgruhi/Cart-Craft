import "./TailwindImport.css";
import Header from "../components/Header.jsx";
import { NavLink } from "react-router";

export default function TrackingPage(){


   return (
      <>
         <div className='pt-16 md:pt-14 pb-4 bg-gray-100 min-h-screen'>
            <Header />

            {/* Main Body */}
            <main className="py-4 px-4 flex flex-col gap-6 md:w-2/3 md:mx-auto">

               {/* Link to /orders page */}
               <NavLink to="/orders" className="text-blue-400 underline text-lg">View all orders</NavLink>

               {/* Arriving Date and Day */}
               <div className="text-2xl">
                 <span className="font-semibold">Arriving on :</span> Monday, August 12
               </div>

               {/* Item details */}
               <div>               
                  <div className="text-lg">
                     Black and Gray Athletic Cotton Socks - 6 pairs
                  </div>

                  <div className="text-md">
                     Quantity : 1
                  </div>
               </div>   

               {/* Item image */}
               <img className="w-60 self-center" src="./images/products/athletic-cotton-socks-6-pairs.jpg" />

               {/* Tracking details */}
               <div className="flex flex-col gap-2">
                  <div className="flex flex-row w-full justify-between">
                     <div className="text-blue-500">Preparing</div>
                     <div>Shipped</div>
                     <div>Delivered</div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full border rounded-2xl h-8 self-center">
                     <div className="w-1/3 bg-blue-500 rounded-2xl h-full"></div>
                  </div>
               </div>
            </main>
         </div>
      </>
   );
}