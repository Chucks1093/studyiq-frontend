import { useRef, useState } from "react";
import { useQuestion } from "../../utils/redux/useQuestion";
import showToast from "../../utils/showToast";


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
	};
}


function CreateQuiz() {
	const fileRef = useRef<HTMLInputElement>(null);
	const addNewCard = useQuestion((state) => state.addNewCard);
	const [isLoading, setIsLoading] = useState(false);
	const [loadingText, setLoadingText] = useState(
		'Click on the button below to upload'
	);
	const handleAddFileClick = () => {
		fileRef.current?.click();
	};
	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setIsLoading(true);
		const file = event.target.files && event.target.files[0];

		if (file) {
			const formData = new FormData();
			formData.append('file', file);

			try {
				// Send the file to the server using the fetch API
				setLoadingText('Getting Response..');
				setTimeout(() => setLoadingText('Generating Questions...'), 4000);
				setTimeout(() => setLoadingText('Analyzing Answers...'), 11000);
				const response = await fetch(`${BASEURL}/quiz?count=10`, {
					method: 'POST',
					headers: {
						authorization: `Bearer ${token}`,
					},
					body: formData,
				});

				// Handle the server response
				if (response.ok) {
					const data = (await response.json()) as QuizResponse;
					addNewCard(data.data);
					console.log(data);
					showToast.success('File added');
					setShow(false);
				} else {
					console.error("Couldn't generat pDf");
					showToast.error("Couldn't generat pDf");
				}
			} catch (error) {
				console.error("Couldn't generat pDf");
				showToast.error("Couldn't generat pDf");
			} finally {
				setLoadingText('Click on the button below to upload');
			}
		}
		setIsLoading(false);
	};
	return (
		<div>
			<h1 className="font-bold text-3xl">Upload Document</h1>
			<div className="flex flex-col border border-dashed items-center mt-8 py-14  border-gray-400 rounded-lg">
				<span className="w-12 p-1 h-12 rounded-full bg-gray-500 mb-4">
					<img
						className="invert brightness-200  "
						src="/icons/plus.svg"
						alt=""
					/>
				</span>
				<input
					type="file"
					accept=".pdf"
					ref={fileRef}
					onChange={handleFileChange}
					style={{ display: 'none' }}
				/>
				<p className="text-sm text-gray-500">
					Click your to &nbsp;
					<span onClick={handleAddFileClick} className="text-blue-700 underline ">here</span> to upload
					document
				</p>
			</div>
		</div>
	);
}
export default CreateQuiz;
