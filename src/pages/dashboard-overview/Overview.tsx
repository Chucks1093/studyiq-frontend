import AnalyticsCard from '../../components/analytic-card/AnalyticsCard';
import HeroChart from '../../components/dashboard/hero-chart/HeroChart';
import useCurrentUser from '../../utils/redux/currentUser';

const analyticsCards = [
	{
		title: 'Total attempted question',
		total: 25000,
      color: "blue",
		icon: '/icons/question-mark.svg',
		filter: 'currency',
		percent: 1000,
	},
	{
		title: 'Total attmepted answers',
      color: "blue",
		total: 1245,
		icon: '/icons/check-mark.svg',
		filter: 'none',
		percent: 730,
	},
	{
		title: 'Total correct flash card',
      color: "blue",
		total: 87,
		icon: '/icons/check-mark.svg',
		filter: 'percentage',
		percent: 30,
	},
	{
		title: 'Total questions shared',
      color: "blue",
		total: 87,
		icon: '/icons/question-mark.svg',
		filter: 'percentage',
		percent: 30,
	},
];

function Overview() {
	const currentUser = useCurrentUser((state) => state.currentUser);
   
	return (
		<div >
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
