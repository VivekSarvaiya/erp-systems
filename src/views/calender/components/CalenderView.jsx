import Statistic from "antd/lib/statistic/Statistic";
import React from "react";

const CalenderView = ({ orders }) => {
   return (
      <div className="divide-y">
         {
            orders?.map((order) => {
               return (
                  <div key={order.id} className="p-2">
                     <p><b>Customer name:</b> {order.customer_name}</p>
                     <p><b>Products:</b> {order?.items?.map((item, i, arr) => {
                        return (
                           <React.Fragment
                              key={item.product_id}
                           >
                              {item.productDetail.title} ({item.quantity}) {i === arr.length - 1 ? ' ' : ', '}
                           </React.Fragment>
                        )
                     })}</p>
                     <b>Total Bill Amount:</b> <Statistic value={order.total_price} prefix="$" />
                  </div>
               )
            })
         }
      </div>
   )
};

export default CalenderView;
