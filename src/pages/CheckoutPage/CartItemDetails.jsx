import { formatMoney } from "../../utils/money"
import axios from "axios";

export default function CartItemDetails({cartItem,loadCart}) {
   const deleteItem = async() => {
      console.log(cartItem.productId)
      await axios.delete(`/api/cart-items/${cartItem.productId}`)
      await loadCart();
   }
   return (
      <>
         <section className="flex md:w-3/5 md:gap-4 items-center">
            <img className="w-1/2 md:w-1/3" src={cartItem.Product.image} />
            <div className="flex flex-col md:flex-grow gap-4">
               <span className="text-md md:text-lg font-semibold">{cartItem.Product.name}</span>
               <span className="text-lg font-bold">{formatMoney(cartItem.Product.priceCents)}</span>
               <span className="text-sm">Quantity: {cartItem.quantity}
                  <span className="text-blue-600 cursor-pointer font-semibold">
                     <a className="hover:opacity-80"> Update</a> <a onClick={deleteItem} className="hover:opacity-80">Delete</a>
                  </span>
               </span>
            </div>
         </section>
      </>
   )
}