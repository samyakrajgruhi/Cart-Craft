import './TailwindImport.css';
import Header from "../components/Header.jsx";
import axios from "axios";
import { useState, useEffect } from 'react';
import { formatMoney } from '../utils/money.js';


export default function HomePage() {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios.get('/api/products').then(
         (response) => {
            setProducts(response.data);
         }
      )
   })

   return (
      <>
         <div className='pt-16 md:pt-14 pb-4 bg-gray-100 min-h-screen'>
            {/* This is the header */}
            <Header />
            <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
               {products.map((product) => (
                  <section key = { product.id } className = "flex-1 shadow-xl bg-white flex flex-col items-center justify-between p-4 gap-4" >
                     {/* Item image */ }
                     <img className = "w-1/2" src={product.image} alt = "Basketball" />
                     {/* Item details */ }
                     <section className = "flex flex-col gap-4 w-full" >
                        <p className="font-semibold text-xl">{product.name}</p>
                        <section className="flex gap-2 items-center">
                           <img className="w-24" src={`/images/ratings/rating-${product.rating.stars*10}.png`} alt="Rating" />
                           <div className="text-sm">{product.rating.count}</div>
                        </section>
                     </section>
                     <div className="w-full">
                        <select className="border-2 border-gray-500 rounded">
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
                     {/* Add To Cart Button with Price */}
                     <div className="flex w-full justify-between items-center">
                        <div className="font-bold text-xl">
                           {formatMoney(product.priceCents)}
                        </div>
                        <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                     </div>
                  </section>
               ))}
            </main>
         </div >
      </>
   )
}