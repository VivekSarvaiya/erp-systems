const getTotalSales = (orders) => {
   if (!orders) 0;

   let totalSale = 0;

   orders?.forEach((order) => {
      if (order.status !== 'Cancelled') {
         totalSale += order.total_price;
      }
   })

   return totalSale;
}

export default getTotalSales;