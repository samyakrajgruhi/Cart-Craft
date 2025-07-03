import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";

export default function OrderSummary({deliveryOptions,cart,loadCart}) {
   return (
      <>
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
                     <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
                     <section className=" flex flex-col md:flex-row gap-4  order-1">

                        {/* Order details */}
                        <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

                        {/* Delivery options */}
                        <section className="flex flex-col md:gap-2 md:mt-0 gap-4 mt-4">
                           <span>Choose a delivery option :</span>
                           <DeliveryOptions 
                              deliveryOptions={deliveryOptions}
                              cartItem={cartItem}
                              loadCart={loadCart}
                           />
                        </section>
                     </section>
                  </section>
               )
            })}
         </section>
      </>
   );
}