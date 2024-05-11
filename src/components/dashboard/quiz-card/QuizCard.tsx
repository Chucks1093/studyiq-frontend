import { useNavigate } from 'react-router-dom';
import formatDateTime from '../../../utils/formatDateTime';
import { QuestionCard,  useQuestion } from '../../../utils/redux/useQuestion';

type QuizCardProps = {
question: QuestionCard
};

function QuizCard({ question }: QuizCardProps) {
	const setCurrentQuestion = useQuestion(state => state.setCurrentQuestion);
	const navigate = useNavigate();
	const handleClick = ()=> {
		setCurrentQuestion(question)
		navigate(`/dashboard/quiz/${question._id}`)
	}
	return (
		<div className="relative rounded-lg p-4  h-80 shadow-md border border-gray-300 overflow-hidden">
			<h2 className="text-2xl font-semibold">{question.name}</h2>
			<p className="text-sm text-gray-500 mt-3">
				{formatDateTime(question.createdAt)}
			</p>	
			<img className="absolute w-[90%] opacity-[.2] bg-gray-300 rounded-full -rotate-12 right-9 translate-x-1/2" src="/icons/question-mark.svg" alt="question-mark" />
			<div onClick={handleClick} className="flex justify-between items-center px-4 bg-gray-800 shadow-lg absolute py-3 bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl">
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
