import { useState } from 'react';
import { useQuestion } from '../../utils/redux/useQuestion';
import { useEffect } from 'react';
import { BASE_URL } from '../../utils/constants';
import { token } from '../../utils/constants';
import showToast from '../../utils/showToast';
export type AnsweredType = {
	quizId: string;
	answers: {
		questionId: string;
		answer: number;
	}[];
};

function Top({
	setShowQuiz,
	setAnswers,
}: {
	setShowQuiz: React.Dispatch<React.SetStateAction<boolean>>;
	setAnswers: React.Dispatch<React.SetStateAction<AnsweredType>>;
}) {
	const setMode = useQuestion((state) => state.setMode);
	const handleClick = () => {
		setShowQuiz(false);
		setAnswers({
      quizId: "",
      answers: [],
    });
		setMode('question');
	};
	return (
		<nav className="row-span-1 col-span-full flex justify-between items-center px-8 shadow-md  w-full bg-white h-[10vh] z-20 relative">
			<div className="flex items-center gap-2">
				<img className="w-7 " src="/icons/logo.svg" alt="logo" />
				<h2 className="font-medium">studyIQ</h2>
			</div>
			<h1 className="font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
				Quiz
			</h1>
			<span
				className="w-7 h-7 p-1 rounded-full flex justify-center items-center bg-gray-300 cursor-pointer"
				onClick={handleClick}
			>
				<img
					className="w-full block invert brightness-200"
					src="/icons/cancel.svg"
				/>
			</span>
		</nav>
	);
}
const letter = ['a', 'b', 'c', 'd'];

function Option({
	index,
	option,
	allAnswers,
	setAnswer,
	correctAnswer,
	quizID,
}: {
	index: number;
	option: string;
	allAnswers: AnsweredType;
	setAnswer: React.Dispatch<React.SetStateAction<AnsweredType>>;
	quizID: string;
	correctAnswer: string;
}) {
	const mode = useQuestion((state) => state.mode);
	const existingAnswer = allAnswers.answers.find(
		(item) => item.questionId == quizID
	);
	const getClass = () => {
		if (mode == 'answer' && index == Number(correctAnswer)) {
			return 'right';
		}
		if (
			mode == 'answer' &&
			existingAnswer?.answer !== Number(correctAnswer) &&
			index == existingAnswer?.answer
		) {
			return 'wrong';
		}
		if (mode == 'question') {
			return '';
		}
	};

	const handleClick = () => {
		setAnswer((value) => {
			console.log(value);
			const existing = value.answers.find(
				(item) => item.questionId == existingAnswer?.questionId
			);
			if (existing) {
				const newValues = value.answers.map((item) => {
					if (item.questionId == existing.questionId) {
						return {
							...existing,
							answer: index,
						};
					}
					return item;
				});
				return {
					quizId: value.quizId,
					answers: newValues,
				};
			}

			return {
				...value,
				answers: [...value.answers, { questionId: quizID, answer: index }],
			};
		});
	};
	return (
		<div
			className={`grid grid-cols-options-sm w-[70%] mx-auto mb-3 py-4 px-4 shadow-md mt-4 bg-white rounded-md ${getClass()}`}
		>
			<p>
				{letter[index].toUpperCase()}. {option}
			</p>
			{mode === 'question' && (
				<input
					type="radio"
					id={`${index}`}
					onClick={handleClick}
					value={index}
					checked={existingAnswer?.answer == index}
					defaultChecked={false}
					name={quizID}
				/>
			)}
		</div>
	);
}

function QuizBoard({ setShowQuiz }) {
	const [currentCard, setCurrentCard] = useState(0);
	const currentQuestion = useQuestion((state) => state.currentQuestion);
	const mode = useQuestion((state) => state.mode);
	const setMode = useQuestion((state) => state.setMode);
	const [answers, setAnswers] = useState<AnsweredType>({
		quizId: currentQuestion!._id,
		answers: [],
	});
	const handlePrev = () => {
		if (currentCard == 0) {
			return;
		}

		setCurrentCard(currentCard - 1);
	};
	const handleNext = () => {
		if (currentCard == currentQuestion?.questions.length - 1) {
			return;
		}
		setAnswers((value) => {
			return {
				...value,
				quizId: currentQuestion!._id,
			};
		});
		setCurrentCard(currentCard + 1);
	};

	useEffect(() => {
		setAnswers((value) => ({
			...value,
			quizId: currentQuestion!._id,
		}));
	}, []);

	const handleQuizSubmit = async () => {
		if (answers.answers.length == 0) {
			showToast.message('You have not answered any question');
			return;
		}
		showToast.loading('Processing');
		console.log(token);
		try {
			const resp = await fetch(`${BASE_URL}/quiz/mark`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(answers),
				credentials: 'include',
			});
			const result = await resp.json();
			console.log(result);
			showToast.success('Submitted');
		} catch (error) {
			console.log(error);
			showToast.error('An error occurred');
		}
	};

	const handleSubmit = async () => {
		await handleQuizSubmit();
		setMode('answer');
	};
	return (
		<div className="fixed z-50 top-0 left-0 w-full h-screen bg-white">
			<Top setAnswers={setAnswers} setShowQuiz={setShowQuiz} />
			<div className="mt-6 relative">
				<img
					className="absolute h-screen w-full z-[-1] opacity-15 "
					src="/images/quiz-bg.jpg"
					alt=""
				/>
				<div className="z-10">
					<h2 className="text-center uppercase font-bold text-gray-400">
						QUESTION {currentCard + 1}/{currentQuestion?.questions.length}
					</h2>
					<p className="text-center mt-6 font-semibold capitalize text-lg w-[50%] mx-auto">
						{currentQuestion?.questions[currentCard].question}
					</p>
				</div>
				<div>
					{currentQuestion?.questions[currentCard].answers.map(
						(option, index) => (
							<Option
								allAnswers={answers}
								correctAnswer={
									currentQuestion.questions[currentCard].correctAnswer
								}
								setAnswer={setAnswers}
								index={index}
								quizID={currentQuestion.questions[currentCard]._id}
								option={option}
							/>
						)
					)}
				</div>
				<div className="nav__btn w-[70%] mx-auto">
					<button
						className={currentCard == 0 ? 'hide' : ''}
						onClick={handlePrev}
					>
						Prev
					</button>
					{currentCard != currentQuestion?.questions.length - 1 && (
						<button
							className={
								currentCard == currentQuestion?.questions.length - 1
									? 'hide'
									: ''
							}
							onClick={handleNext}
						>
							Next
						</button>
					)}
					{currentCard == currentQuestion?.questions.length - 1 &&
						mode == 'question' && (
							<button
								onClick={handleSubmit}
								className="flashcard__button"
							>
								<p>Submit</p>
							</button>
						)}
				</div>
			</div>
		</div>
	);
}
export default QuizBoard;
