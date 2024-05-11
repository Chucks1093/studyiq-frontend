import formatDateTime from '../../../utils/formatDateTime';
import { QuestionsData } from '../../../utils/redux/useQuestion';

type QuizCardProps = {
	title: string;
	createdAt: string;
   handleClick: ()=>void
};

function QuizCard({ title, createdAt }: QuestionsData) {
	return (
		<div className="relative rounded-lg p-4  h-80 shadow-md border border-gray-300 overflow-hidden">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="text-sm text-gray-500 mt-3">
				{formatDateTime(createdAt)}
			</p>	
			<img className="absolute w-[90%] opacity-[.2] bg-gray-300 rounded-full -rotate-12 right-9 translate-x-1/2" src="/icons/question-mark.svg" alt="question-mark" />
			<div className="flex justify-between items-center px-4 bg-gray-800 shadow-lg absolute py-3 bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl">
				<p className="text-sm text-white font-bold">Start learning</p>
				<button className="w-6 flex justify-center items-center">
					<img
						className="w-full invert brightness-200"
						src="/icons/arrow-right.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
}
export default QuizCard;
