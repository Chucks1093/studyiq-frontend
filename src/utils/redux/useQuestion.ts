import { create } from 'zustand';
import exampleData from './custom.data';

export type QuestionCard = {
	_id: string;
	name: string;
	result: {count: number, score: number}[];
	count: string;
	score?: number;
	questions: {
		_id: string;
		quizId: string;
		question: string;
		answers: string[];
		correctAnswer: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
	}[];
	createdAt: string;
	updatedAt: string;
	__v: number;
};

type QuestionState = {
	currentQuestion: QuestionCard | null;
	allUsersCards: QuestionCard[];
	mode: "question" | "answer";
	setCurrentQuestion: (question: QuestionCard) => void;
	addNewCard: (newCard: QuestionCard) => void;
	setAllUsersCards: (usersCards: QuestionCard[]) => void;
	setQuizScore?: (quizId: string, score: number) => void;
	setMode: (value:  "question" | "answer")=> void;
};

export const useQuestion = create<QuestionState>((set) => ({
	currentQuestion: null,
	allUsersCards: exampleData as QuestionCard[],
	mode: "question",
	addNewCard: (newCard) =>
		set((state) => ({ allUsersCards: [...state.allUsersCards, newCard] })),
	setCurrentQuestion:(question)=> set(()=> ({currentQuestion: question})),
	setMode:(value) => set(()=> ({mode: value})),

	setAllUsersCards: (userCards) =>
		set(() => ({
			allUsersCards: [ ...userCards],
		})),
	setQuizScore: (quizId, score) =>
		set((state) => {
			const allQuiz = state.allUsersCards.map((quiz) => {
				if (quiz.questions[1].quizId == quizId) {
					return {
						...quiz,
						score: score,
					};
				}
				return quiz;
			});

			return { allUsersCards: allQuiz };
		}),
}));
