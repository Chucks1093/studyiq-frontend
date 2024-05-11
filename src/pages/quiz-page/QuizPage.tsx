import QuizCard from "../../components/dashboard/quiz-card/QuizCard";
import { useQuestion } from "../../utils/redux/useQuestion";


function QuizPage() {
  const quizCards = useQuestion(state => state.allUsersCards)
  return (
    <div>
			<h1 className="font-bold text-3xl">Your Generated Quizzes</h1>
			<p className="text-gray-500 text-sm my-2 w-[55%]">
				Explore and review the comprehensive collection of engaging and
				informative quizzes you have generated here.
			</p>
         
			<div className="cards__container">
				{quizCards.map((card) => (
					<QuizCard question={card} />
				))}
			</div>
			<button>
				<img src="/icons/plus.svg" alt="" />
			</button>
		</div>
  )
}
export default QuizPage