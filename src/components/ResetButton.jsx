import axios from "axios";

export default function ResetButton({loadCart}){

   const reset = async () => {
      await axios.post('/api/reset');
      await loadCart();
   }

   return (
      <div className='fixed bottom-4 right-4 z-50 bg-red-500 text-white text-xl font-semibold px-2 py-1 rounded-4xl cursor-pointer shadow-xl hover:opacity-85 active:opacity-75 '
         onClick={reset}
      >
        Reset
      </div>
   );

}