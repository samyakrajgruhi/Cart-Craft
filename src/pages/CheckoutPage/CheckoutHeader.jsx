import "./TailwindImport.css";
import { NavLink } from "react-router";

export default function CheckoutHeader(){
   return (
      <>
         <header className="w-full h-16 md:h-12 gap-2 bg-white flex justify-between px-4 items-center fixed top-0 shadow-lg ">
            <NavLink to="/">
               <img className="w-9" src="./images/icons/logo-blue.svg" />
            </NavLink >
            
            <div className="text-xl font-semibold text-center">
               Checkout (<NavLink to="/" className="text-blue-700">3 Items</NavLink>)
            </div>
            <img className="w-6" src="./images/icons/checkout-icon.png" />
         </header>
   </>

   );
}