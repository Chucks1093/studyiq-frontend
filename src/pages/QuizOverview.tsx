import { Fragment } from 'react/jsx-runtime';
import { useQuestion } from '../utils/redux/useQuestion';
import QuizBoard from './quiz-page/QuizBoard';

function Metrics({
	src,
	unit,
	title,
}: {
	src: string;
	unit: string;
	title: string;
}) {
	return (
		<div className="flex gap-3 items-center mb-5">
			<span className="w-12 h-12 p-2 rounded-full bg-gray-200 border border-gray-600 flex justify-center items-center">
				<img className="block w-full invert-[.5]" src={src} alt="" />
			</span>
			<div>
				<p className="font-bold text-xl text-gray-700">{unit}</p>
				<p className="text-gray-500">{title}</p>
			</div>
		</div>
	);
}

function QuizOverview() {
	const currentQuiz = useQuestion((state) => state.currentQuestion);
	return (
		<Fragment>
			<div>
				<img
					className="-rotate-180 w-12 mb-4"
					src="/icons/arrow-right.svg"
					alt=""
				/>
				<h1 className="font-bold text-4xl">The Ultimate way to make money</h1>
				<div className="mt-6 border-b border-gray-300 pb-5">
					<Metrics
						unit={`${13}`}
						title="Multiple Choice Questions"
						src="/icons/q-count.svg"
					/>
					<Metrics unit="90%" title="For Badge" src="/icons/award-b.svg" />
					<Metrics unit="40%" title="Previous Score" src="/icons/score.svg" />
					<div className="flex gap-3 items-center mb-5">
						<span className="w-12 h-12 p-2 rounded-full bg-gray-200 border border-gray-600 flex justify-center items-center">
							<img className="block w-full invert-[.5]" src="/icons/difficulty.svg" alt="" />
						</span>
						<select name="difficulty" id="difficulty" className='w-[9rem] border border-gray-400 rounded-xl h-10'>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</div>
				</div>
				<div>
					<h1 className="font-bold text-2xl mt-4">Before you start</h1>
					<div className="instructions">
						<p>
							You must complete this text is one session - make sure your
							internet is reliable.
						</p>
						<p>
							1 mark awarded for a correct answer. No negative marking will
							be there for wrong answer.
						</p>
						<p>
							The more you give the correct answer more chance to win the
							badge.
						</p>
						<p>
							If you don't earn a badge this time you can retake the test
							once more .
						</p>
					</div>
				</div>
				<button className='w-[14rem] rounded-3xl py-2 bg-gray-600 font-bold text-white mt-8'>Start Quiz</button>
			</div>
			<QuizBoard />

		</Fragment>
	);
}
export default QuizOverview;
