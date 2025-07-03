import {useState, useRef} from 'react';
import { formatMoney } from '../../utils/money';
import axios from 'axios';

export default function Product({ product,loadCart }) {

   const [quantity,setQuantity] = useState(1);
   const [showAdded, setShowAdded] = useState(false);
   const timeoutRef = useRef(null);

   return (
      <section className="flex-1 shadow-xl bg-white flex flex-col items-center justify-between p-4 gap-4" >
         {/* Item image */}
         <img className="w-1/2" src={product.image} alt="Basketball" />
         {/* Item details */}
         <section className="flex flex-col gap-4 w-full" >
            <p className="font-semibold text-xl">{product.name}</p>
            <section className="flex gap-2 items-center">
               <img className="w-24" src={`/images/ratings/rating-${product.rating.stars * 10}.png`} alt="Rating" />
               <div className="text-sm">{product.rating.count}</div>
            </section>
         </section>
         <div className="w-full">
            <select value={quantity} className="border-2 border-gray-500 rounded" onChange={(event)=>{
               const selectedQuantity = Number(event.target.value);
               setQuantity(selectedQuantity);
            }}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
            </select>
         </div>
         <div className={`font-semibold text-green-600 self-end flex gap-1 transition-opacity ${showAdded ? 'opacity-100' : 'opacity-0'}`}>
            Added <img className= "w-3" src="/images/icons/checkmark.png" /> 
             
         </div>
         {/* Add To Cart Button with Price */}
         <div className="flex w-full justify-between items-center">
            <div className="font-bold text-xl">
               {formatMoney(product.priceCents)}
            </div>
            <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-md cursor-pointer hover:opacity-80 active:bg-blue-700"
               onClick={ async () => {
                  if (timeoutRef.current) {
                     clearTimeout(timeoutRef.current);
                  }
                  
                  setShowAdded(true);

                  timeoutRef.current = setTimeout(() => {
                     setShowAdded(false);
                     timeoutRef.current = null;
                  }, 2000);
                  
                  await axios.post('/api/cart-items', {
                     productId: product.id,
                     quantity: quantity
                  });
                  await loadCart();
                  
                  
               }}
            >Add To Cart</button>
         </div>
      </section>
   );
}