import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

export default function OrderHeader({order}) {
   return (
      <>
         <section className="border-b border-gray-300 p-4 flex flex-col text-lg md:text-md md:flex-row md:justify-between md:items-center md:gap-4" >
            <div className="md:flex md:flex-col">
               <span className="font-semibold">Order Placed: </span>
               <span>{dayjs(order.orderTimeMs).format('dddd DD')}</span>
            </div>
            <div className="md:flex md:flex-col">
               <span className="font-semibold">Total: </span>
               <span>{formatMoney(order.totalCostCents)}</span>
            </div>
            <div className="md:flex md:flex-col">
               <span className="font-semibold">Order ID: </span>
               <span>{order.id}</span>
            </div>
         </section>
      </>

   );
}