const getPillVarient = (status) => {
   let varient = "default";

   switch (status) {
      case "Delivered":
         varient = 'green'
         break;
      case "In Transit":
         varient = 'yellow'
         break;
      case "Pending":
         varient = 'gray'
         break;
      case "Cancelled":
         varient = 'red'
         break;

      default:
         varient = "default";
         break;
   }

   return varient;
}

export default getPillVarient;