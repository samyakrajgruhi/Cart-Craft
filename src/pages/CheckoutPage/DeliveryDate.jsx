import dayjs from "dayjs";

export default function DeliveryDate({selectedDeliveryOption}){
   
   return (
      <>
         <span className="text-blue-700 text-xl font-semibold">Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTime).add(selectedDeliveryOption.deliveryDays, 'day').format('dddd, MMMM D')}</span>
      </>
   )
}