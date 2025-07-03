import Product from "./Product";

export default function ProductsGrid({products,loadCart}) {
   return (
      <>
         {products.map((product) => (
            <Product key={product.id} product={product} loadCart={loadCart} />
         ))}
      </>
   )
}