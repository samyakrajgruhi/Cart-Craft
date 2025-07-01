import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

export default function DeliveryOptions({deliveryOptions,cartItem}) {
   return (
      <>
         {deliveryOptions.map((deliveryOption) => (
            <div key={deliveryOption.id} className="flex gap-8 pl-2">
               <input className="w-4" type="radio" checked={cartItem.deliveryOptionId === deliveryOption.id} />
               <div className="flex flex-col">
                  <span>
                     {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                  </span>
                  <span className="text-gray-500">
                     {deliveryOption.priceCents === 0 ? 'FREE Shipping' : formatMoney(deliveryOption.priceCents)}
                  </span>
               </div>
            </div>
         ))}
      </>
   );
}