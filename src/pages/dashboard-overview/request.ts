
import { token } from '../../utils/constants';
import { BASE_URL } from '../../utils/constants';

interface QuizResponse {
	status: string;
	message: string;
	data: {
		_id: string;
		name: string;
		count: string;
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
	}[];
}

export const getQuizzes = async (): Promise<QuizResponse> => {
	const resp = await fetch(`${BASE_URL}/users/quizzes`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${token}`,
		},
		credentials: 'include',
	});

	if (!resp.ok) {
		throw new Error('An unknow error occurred');
	}
	const result = (await resp.json()) as QuizResponse;
	return result;
};