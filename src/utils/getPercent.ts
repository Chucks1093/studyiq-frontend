export const getPercent =(total: number, average: number)=> {
   const calculatedPercent = (average/total) * 100
   return calculatedPercent.toFixed(2)
}
