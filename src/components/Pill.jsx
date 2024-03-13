const Pill = ({ text, varient = "default" }) => {

   const pillVarients = {
      default: "bg-blue-200 text-blue-800",
      gray: "bg-gray-200 text-gray-800",
      red: "bg-red-200 text-red-800",
      green: "bg-green-200 text-green-800",
      yellow: "bg-yellow-200 text-yellow-800",
   }

   return (
      <span className={`${pillVarients[varient]} text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>{text}</span>
   )
};

export default Pill;
