import { useEffect } from 'react';
import AnalyticsCard from '../../components/analytic-card/AnalyticsCard';
import HeroChart from '../../components/dashboard/hero-chart/HeroChart';
import useCurrentUser from '../../utils/redux/currentUser';
import { getQuizzes } from './request';
import { useQuestion } from '../../utils/redux/useQuestion';

const analyticsCards = [
	{
		title: 'Total attempted question',
		total: 25000,
      color: "bg-red-300",
		icon: '/icons/question-mark.svg',
		filter: 'currency',
		percent: 1000,
	},
	{
		title: 'Total correct answers',
      color: "bg-green-300",
		total: 1245,
		icon: '/icons/check-mark.svg',
		filter: 'none',
		percent: 730,
	},
	{
		title: 'Total correct flash card',
      color: "bg-blue-300",
		total: 87,
		icon: '/icons/test.svg',
		filter: 'percentage',
		percent: 30,
	},
	{
		title: 'Total uploaded document',
      color: "bg-yellow-300",
		total: 87,
		icon: '/icons/document.svg',
		filter: 'percentage',
		percent: 30,
	},
];



function Overview() {
	const currentUser = useCurrentUser((state) => state.currentUser);
	const setAllUsersCards  = useQuestion(state => state.setAllUsersCards) 
	const fetchQuiz =async() => {
      try {
         const data = await getQuizzes();
         console.log(data)
         setAllUsersCards(data.data)
      }catch(error) {
         console.log(error)
      }
   }
   useEffect(()=> {
      fetchQuiz() 
   }, [])
   
	return (
		<div>
			<h1 className='font-bold text-3xl'>Hi, {currentUser?.name}</h1>
			<p className='text-gray-500 text-sm my-2'>Welcome back to your studyID dashboard</p>
			<div className='flex justify-between items-center gap-8 mt-4'>
				{analyticsCards.map((metric, index) => (
					<AnalyticsCard {...metric} key={index} />
				))}
			</div>
         <HeroChart />
		</div>
	);
}
export default Overview;
