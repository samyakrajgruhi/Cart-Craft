import { formatMoney } from "../../utils/money";
import { useState} from "react";
import axios from "axios";

export default function CartItemDetails({cartItem,loadCart}) {

   const [isUpdating, setIsUpdating] = useState(false);
   const [quantity,setQuantity] = useState(cartItem.quantity)

   const updateQuantity = async() => {
      if(quantity <= 0) {
         alert("Invalid Input.")
         setQuantity(cartItem.quantity)
         return
      }
      await axios.put(`/api/cart-items/${cartItem.productId}`,{
         quantity: Number(quantity)
      })
      await loadCart();
   }

   function changeUpdateState(){
      if(isUpdating === true) {
         setIsUpdating(false)
      } else {
         setIsUpdating(true)
      }
   }

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
               
               <span className="text-sm">Quantity :  
                  {isUpdating ? 
                     <input value={quantity} type="text" className="min-w-4 max-w-8 px-2 border" onChange={
                        (event) => {
                           let inputText = event.target.value;
                           setQuantity(inputText)
                        }
                     } onKeyDown={
                        (event) => {
                           if(event.key === 'Enter'){
                              updateQuantity()
                              changeUpdateState()
                           }
                           else if (event.key === 'Escape'){
                              setQuantity(cartItem.quantity);
                              changeUpdateState()
                           }
                        }
                     }/> 
                  : " " + cartItem.quantity} 
                  <span className="text-blue-600 cursor-pointer font-semibold">
                     <a className="hover:opacity-80" onClick={()=>{
                        updateQuantity()
                        changeUpdateState()
                     }}> 
                        {isUpdating ? " Save" : " Update"}</a> 
                     <a onClick={deleteItem} className="hover:opacity-80"> Delete</a>
                  </span>
               </span>
            </div>
         </section>
      </>
   )
}