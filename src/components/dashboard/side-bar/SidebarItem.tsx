import { NavLink, useLocation } from 'react-router-dom';

type SideItemProps = {
   icon: string;
   title: string;
   link: string;
   handleClick: ()=> void
}

const SidebarItem = ({ icon, title, link, handleClick }: SideItemProps) => {
	const location = useLocation();


	return (
		<NavLink onClick={handleClick} className={`${location.pathname == link && "active__link"} pl-12 gap-3 flex items-center py-3 hover:bg-slate-100 `} to={link}>
			<img className='w-6 block invert-[.5]' src={icon} alt="" />
			<h2 className="text-md whitespace-nowrap overflow-hidden overflow-ellipsis text-wybt-primary ">{title}</h2>
		</NavLink>
	);
};

export default SidebarItem;