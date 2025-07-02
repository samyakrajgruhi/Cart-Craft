import dayjs from "dayjs";
import { NavLink } from "react-router";

export default function OrderItem({order}) {
   return (
      <>
         {order.products.map((item) => (
            <section className="flex flex-col md:flex-row md:items-start gap-4 p-4 ">
               <img className="w-64 md:w-56 mx-auto" src={item.product.image} />
               <section className="flex flex-col gap-4 md:w-3/5">
                  <section className="px-2 text-lg md:text-md">
                     <p className="font-semibold text-xl ">{item.product.name}</p>
                     <p className="mt-4"><span>Arriving on : </span>{dayjs(item.estimatedDeliveryTimeMs).format('dddd DD')}</p>
                     <p><span>Quantity : </span>{item.quantity}</p>
                  </section>
                  <button className="bg-blue-600 w-full md:w-2/3 rounded-lg p-2 text-center text-white text-lg md:text-md cursor-pointer hover:opacity-80 active:bg-blue-700">Add To Cart</button>
               </section>
               <NavLink to="/tracking" className="border-2 border-gray-300 w-full md:w-1/3 rounded-lg p-2 text-center text-lg md:text-md">Track Package</NavLink>
            </section>
         ))}
      </>
   );
}