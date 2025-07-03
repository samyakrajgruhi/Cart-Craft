import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export default function DeliveryOptions({ deliveryOptions, cartItem,loadCart }) {

   return (
      <>
         {deliveryOptions.map((deliveryOption) => {
            
            const updateDeliveryOption = async () => {
               
               await axios.put(`/api/cart-items/${cartItem.productId}`,{
                  deliveryOptionId : deliveryOption.id 
               });

               await loadCart();
            };

            return (
               <div key={deliveryOption.id} className="flex gap-8 pl-2 cursor-pointer" onClick={
                  updateDeliveryOption
               }>
                  <input className="w-4" 
                     type="radio" 
                     checked={cartItem.deliveryOptionId === deliveryOption.id} 
                     onChange={()=>{}} 
                  />
                  <div className="flex flex-col">
                     <span>
                        {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                     </span>
                     <span className="text-gray-500">
                        {deliveryOption.priceCents === 0 ? 'FREE Shipping' : formatMoney(deliveryOption.priceCents)}
                     </span>
                  </div>
               </div>
            )
         })}
      </>
   );
}