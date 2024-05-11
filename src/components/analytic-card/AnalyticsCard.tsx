import { cn } from "../../utils/cn";
import { getPercent } from "../../utils/getPercent";
import clsx from "clsx";
type AnalyticsCardProp = {
   title: string;
   total: number 
   icon: string;
   filter: string;
   percent: number;
   color: string;
   
}

function AnalyticsCard({title, total, percent, icon, filter, color}: AnalyticsCardProp) {
   const calculatedPercent = getPercent(total, percent);
   const widthPecent = clsx(`w-[${Math.floor(Number(calculatedPercent))}%]`);
   
  return (
    <article className="w-full p-4 border border-gray-300-400 rounded-lg">
      <div className="flex justify-between items-center mb-4">
         <h1 className="text-2xl font-bold">{total}</h1>
         <span className={`w-7 h-7 rounded-full ${color} flex justify-center items-center `}>
            <img className={`${filter} w-full`} src={icon} alt={icon} />
         </span>
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex justify-between items-center gap-3 mt-3">
         <div className={` h-1 rounded-md  w-full bg-gray-200 flex items-center relative`}>
            <span style={{width: `${calculatedPercent}%`}} className={` block h-full ${color} absolute`} />
         </div>
         <p className="text-sm text-gray-400">{calculatedPercent}%</p>
      </div>
    </article>
  )
}
export default AnalyticsCard