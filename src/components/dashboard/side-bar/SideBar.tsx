import { useNavigate } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import showToast from '../../../utils/showToast';
import useCurrentUser from '../../../utils/redux/currentUser';

const SideBar = () => {
	const currentUser = useCurrentUser((state) => state.currentUser);
	const setSideBar = useCurrentUser((state) => state.setSideBar);
	const sideBarState = useCurrentUser((state) => state.sideBar);
	const navigate = useNavigate();

	const handleNavLinkClick = () => {
		setSideBar(false);
	};

	const handleLogOut = (e) => {
		e.preventDefault();
		showToast.success('Signed Out');
		navigate('/login', { replace: true });
	};
	return (
		<aside className={`col-span-1 row-start-2 row-span-3 flex flex-col border-r border-r-gray-200`}>
			<div className="flex flex-col items-center  mt-12 mb-6">
				<div className='relative'>
					<img
						className="w-20 h-20 object-cover object-top rounded-full"
						src="/images/no-profile.jpg"
						alt=""
					/>
					<span className="w-4 h-4 bg-green-300 absolute bottom-0 right-0 rounded-full"></span>
				</div>
				<h2 className='mt-2 font-bold'>{currentUser?.name}</h2>
				<p className='text-sm text-gray-400'>{currentUser?.email}</p>
			</div>

			{/* <p className="text-gray-400 text-sm mb-2 pl-6">Dashboard</p> */}
         <div>
			<SidebarItem
				link="/dashboard/overview"
				icon="/icons/dashboard.svg"
				title="Overview"
				handleClick={handleNavLinkClick}
			/>
			<SidebarItem
				link="/dashboard/create-quiz"
				icon="/icons/add.svg"
				title="Create Quiz"
				handleClick={handleNavLinkClick}
			/>
			<SidebarItem
				link="/dashboard/quiz"
				icon="/icons/quiz.svg"
				title="Quizzes"
				handleClick={handleNavLinkClick}
			/>

         </div>
         <div className='mt-auto border-t border-t-gray-200'>
            <SidebarItem
               link="/login"
               icon="/icons/logout.svg"
               title="Sign Out"
               handleClick={handleLogOut}
            />

         </div>
		</aside>
	);
};

export default SideBar;
