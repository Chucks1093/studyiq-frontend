import { create } from 'zustand';
import exampleData from './custom.data';

type QuestionCard = {
	_id: string;
	name: string;
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
	addNewCard: (newCard: QuestionCard) => void;
	setAllUsersCards: (usersCards: QuestionCard[]) => void;
	setQuizScore?: (quizId: string, score: number) => void;
};

export const useQuestion = create<QuestionState>((set) => ({
	currentQuestion: null,
	allUsersCards: exampleData as QuestionCard[],
	addNewCard: (newCard) =>
		set((state) => ({ allUsersCards: [...state.allUsersCards, newCard] })),

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
