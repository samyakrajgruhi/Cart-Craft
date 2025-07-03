import { formatMoney } from "../../utils/money";

export default function PaymentSummary({paymentSummary}) {
   return (
      <>
         {paymentSummary && (
            <section className="border border-gray-300 w-full md:h-1/2 rounded-lg p-4 flex flex-col gap-2 bg-white shadow-md md:order-2">
               {/*Main Heading */}
               <h2 className="text-lg font-medium">Payment Summary</h2>

               {/*Item + Delivery Charge*/}
               <div>
                  <div className="flex justify-between">
                     <span className="text-start">Items ({paymentSummary.totalItems}) :</span>
                     <span className="text-end">{formatMoney(paymentSummary.productCostCents)}</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-start">Shipping & handling :</span>
                     <span className="text-end">{formatMoney(paymentSummary.shippingCostCents)}</span>

                  </div>
               </div>
               <hr className="w-14 self-end text-gray-300" />
               {/*Before tax cost and tax applied*/}
               <div>
                  <div className="flex justify-between">
                     <span className="text-start">Total before tax :</span>
                     <span className="text-end">{formatMoney(paymentSummary.subtotalCents)}</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-start">Estimated tax (10%) :</span>
                     <span className="text-end">{formatMoney(paymentSummary.taxCents)}</span>
                  </div>
               </div>
               <hr className="text-gray-300"/>
               {/*After tax total cost */}
               <div className="flex justify-between text-blue-700 text-lg font-semibold">
                  <span>Order Total :</span>
                  <span>{formatMoney(paymentSummary.totalCents)}</span>
               </div>
               {/* Add to Cart button */}
               <button className="bg-blue-600 font-semibold text-md text-white p-2 rounded-lg mt-4 cursor-pointer hover:opacity-80 active:bg-blue-700">
                  Place your order
               </button>
            </section>
         )}
      </>
   );
}