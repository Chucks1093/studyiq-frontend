import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthLayout from './pages/auth-layout/AuthLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import DashboardLayout from './pages/dashboard-layout/DashboardLayout';
import Overview from './pages/dashboard-overview/Overview';
import { Fragment } from 'react/jsx-runtime';
import { Toaster } from 'react-hot-toast';
import QuizPage from './pages/quiz-page/QuizPage';
import SummaryPage from './pages/summary-page/SummaryPage';
import CreateQuiz from './pages/create-quiz/CreateQuiz';
import QuizOverview from './pages/QuizOverview';


const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		element: <AuthLayout />,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
	{
		element: <DashboardLayout />,
		children: [
			{
				path: '/dashboard/overview',
				element: <Overview />,
			},
			{
				path: '/dashboard/create-quiz',
				element: <CreateQuiz />,
			},
			{
				path: '/dashboard/quiz',
				element: <QuizPage />,
			},
			{
				path: '/dashboard/quiz/:id',
				element: <QuizOverview />,
			},
			{
				path: '/dashboard/summary',
				element: <SummaryPage />,
			},
		],
	},
]);

function App() {
	return (
		<Fragment>
			<Toaster position="top-center" reverseOrder={false} gutter={8} />
			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
