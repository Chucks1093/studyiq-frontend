import { getPercent } from "../../utils/getPercent";

type AnalyticsCardProp = {
   title: string;
   total: number 
   icon: string;
   filter: string;
   percent: number;
   color: string;
   
}

function AnalyticsCard({title, total, percent, icon, filter, color}: AnalyticsCardProp) {
   const calculatedPercent = getPercent(total, percent)
   
  return (
    <article className="w-full p-4 border border-gray-300-400 rounded-lg">
      <div className="flex justify-between items-center mb-4">
         <h1 className="text-2xl font-bold">{total}</h1>
         <span className="w-7 h-7 rounded-full flex justify-center items-center ">
            <img className={`${filter} w-full`} src={icon} alt={icon} />
         </span>
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex justify-between items-center gap-3 mt-3">
         <div className={` h-1 rounded-md ${color} w-full bg-gray-200 flex items-center `}>
            <span className={`w-[${calculatedPercent}%] block h-full ${color}`} />
         </div>
         <p className="text-sm text-gray-400">{calculatedPercent}%</p>
      </div>
    </article>
  )
}
export default AnalyticsCard