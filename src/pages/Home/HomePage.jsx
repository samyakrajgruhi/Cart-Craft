import './TailwindImport.css';
import Header from "../../components/Header.jsx";
import axios from "axios";
import { useState, useEffect } from 'react';
import ProductsGrid from './ProductsGrid.jsx';


export default function HomePage() {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios.get('/api/products').then(
         (response) => {
            setProducts(response.data);
         }
      )
   },[])

   return (
      <>
         <div className='pt-16 md:pt-14 pb-4 bg-gray-100 min-h-screen'>
            {/* This is the header */}
            <Header />
            <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
               <ProductsGrid products={products} />
            </main>
         </div >
      </>
   )
}