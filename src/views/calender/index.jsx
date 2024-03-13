
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Popover from 'antd/lib/popover';
import Calendar from 'antd/lib/calendar';
import Pill from '../../components/Pill';
import Loader from '../../components/Loader';
import CalenderView from './components/CalenderView';
import getOrdersByDates from './utils/getOrdersByDates';

const Calender = () => {

   const { orders } = useSelector((state) => state.ordersReducer);
   const [deliverables, setDeliverables] = useState(null)

   const fetchdeliverables = (orderData) => {
      const deliverables = getOrdersByDates(orderData);
      setDeliverables(deliverables);
   }

   const cellRenderer = (current) => {
      let date = new Date(current.$d).toLocaleDateString()
      if (deliverables[date]) {
         return (
            <Popover
               content={<CalenderView orders={deliverables[date]} />}
               placement="bottom"
               trigger="click">
               <div className='w-full h-full grid place-items-center'>
                  <Pill text={deliverables[date].length} />
               </div>
            </Popover>
         )
      }
      else return ""
   };

   useEffect(() => {
      if (orders) fetchdeliverables(orders);
   }, [orders])


   if (!deliverables) {
      return <Loader />
   }

   return (
      <div className="mt-8 mb-8 flex flex-col gap-12">
         <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-dark to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
               <h6 className="flex justify-between items-center antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                  Orders Calendar
               </h6>
            </div>
            <div className=" sm:p-2 calendar">
               <Calendar cellRender={cellRenderer} />
            </div>
         </div>
      </div>
   )
};

export default Calender;
