import './TailwindImport.css';

export default function HomePage() {
   return (
      <>
         <div className='pt-16 md:pt-14 pb-4 bg-gray-100 min-h-screen'>
            {/* This is the header */}
            <header className="w-full h-16 md:h-12 bg-blue-500 gap-2 flex justify-between px-4 items-center fixed top-0">
               {/* this is logo || Left section*/}
               <section className="flex items-center gap-1 ">
                  <svg width="40" height="40" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <mask id="mask0_4_22" maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46" style={{maskType: "alpha"}}>
                        <rect width="46" height="46" fill="white" />
                     </mask>
                     <g mask="url(#mask0_4_22)">
                        <path d="M13.9917 40.25C12.7778 40.25 11.7396 39.8108 10.8771 38.9323C10.0146 38.0538 9.58332 37.0076 9.58332 35.7937V18.0167L6.08541 9.58333H1.91666V5.75H8.67291L11.8354 13.4167H40.1542C40.8889 13.4167 41.4479 13.7201 41.8312 14.3271C42.2146 14.934 42.2305 15.5569 41.8792 16.1958L36.4167 26.8813C38.0458 27.1368 39.4114 27.8875 40.5135 29.1333C41.6156 30.3792 42.1667 31.8486 42.1667 33.5417C42.1667 35.3944 41.5198 36.9757 40.226 38.2854C38.9323 39.5951 37.359 40.25 35.5062 40.25C33.6215 40.25 32.0323 39.5951 30.7385 38.2854C29.4448 36.9757 28.7979 35.3944 28.7979 33.5417C28.7979 32.9028 28.8778 32.3118 29.0375 31.7687C29.1972 31.2257 29.4208 30.6986 29.7083 30.1875L23.4312 29.6125L17.6812 38.2375C17.266 38.8764 16.7309 39.3715 16.076 39.7229C15.4212 40.0743 14.7264 40.25 13.9917 40.25ZM32.2958 26.5938L37.0396 17.25H13.4167L15.8125 23C16.068 23.6389 16.4753 24.174 17.0344 24.6052C17.5934 25.0365 18.2403 25.284 18.975 25.3479L32.2958 26.5938ZM14.0396 36.3687C14.1035 36.3687 14.2472 36.2889 14.4708 36.1292L19.1187 29.2292C17.5535 29.0694 16.3236 28.6941 15.4292 28.1031C14.5347 27.5122 13.8639 26.8972 13.4167 26.2583V35.8417C13.4167 36.0014 13.4805 36.1292 13.6083 36.225C13.7361 36.3208 13.8799 36.3687 14.0396 36.3687ZM35.4583 36.4167C36.2889 36.4167 36.9757 36.1372 37.5187 35.5781C38.0618 35.0191 38.3333 34.3403 38.3333 33.5417C38.3333 32.7111 38.0618 32.0243 37.5187 31.4813C36.9757 30.9382 36.2889 30.6667 35.4583 30.6667C34.6597 30.6667 33.9809 30.9382 33.4219 31.4813C32.8628 32.0243 32.5833 32.7111 32.5833 33.5417C32.5833 34.3403 32.8628 35.0191 33.4219 35.5781C33.9809 36.1372 34.6597 36.4167 35.4583 36.4167Z" fill="white" />
                     </g>
                  </svg>
                  <div className="font-semibold text-xl text-white hidden md:inline">
                     CartCraft
                  </div>
               </section>
               {/* This is the search bar || Middle section */}
               <section className="flex flex-grow justify-center">
                  <div className="flex w-2/3">
                     <input className="w-full rounded-tl-md rounded-bl-md text-xs p-2 bg-white" placeholder="Search" />
                     <button className="flex flex-col justify-center items-center bg-blue-300 rounded-tr-md rounded-br-md px-2">
                        <img className="w-4" src="/images/icons/go-button.svg" alt="Search" />
                     </button>
                  </div>
               </section>
               {/* Order & Cart button || Right section*/}
               <section className="flex gap-2">
                  <button className="text-white text-center text-sm border p-1 rounded-md">
                     Orders
                  </button>
                  <button className="text-white text-center text-sm border p-1 rounded-md flex items-center gap-1">
                     <img className="w-4" src="/images/icons/shopping_cart.svg" alt="Cart" />
                     Cart
                  </button>
               </section>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white border flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white border flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white border flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white border flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white border flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

               {/* Card */}
               <section className="flex-1 shadow-xl bg-white border flex flex-col items-center justify-between p-4 gap-4">
                  {/* Item image */}
                  <img className="w-1/2" src="/images/products/intermediate-composite-basketball.png" alt="Basketball" />
                  {/* Item details */}
                  <section className="flex flex-col gap-4 w-full">
                     <p className="font-semibold text-xl">Intermediate Size BasketBall</p>
                     <section className="flex gap-2 items-center">
                        <img className="w-24" src="/images/ratings/rating-35.png" alt="Rating" />
                        <div className="text-sm">123</div>
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
                        $20.95
                     </div>
                     <button className="bg-blue-500 w-1/2 rounded-lg p-2 text-white text-lg">Add To Cart</button>
                  </div>
               </section>

            </main>
         </div>
      </>
   )
}