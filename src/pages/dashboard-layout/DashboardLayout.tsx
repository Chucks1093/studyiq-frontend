import './style.scss';
import SideBar from '../../components/dashboard/side-bar/SideBar';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/dashboard/side-bar/nav-bar/NavBar';


function DashboardLayout() {
	return (
		<div className="grid grid-cols-dashboard-sm md:grid-cols-dashboard-md grid-rows-dashboard-md h-[100dvh]">
         <NavBar />
			<SideBar />
      <div className="pt-10 px-4 row-start-2 row-span-3 col-start-2 col-span-3 overflow-y-auto pb-14">
			<Outlet />

      </div>
		</div>
	);
}
export default DashboardLayout;
