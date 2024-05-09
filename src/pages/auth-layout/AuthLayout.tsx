import "./auth.scss";
import { Outlet } from "react-router-dom";

function AuthLayout() {
	return (
		<div className="auth__page">
			<div className="auth__image__container">
				<img
					className="auth__image"
					src={`/background/auth-12.svg`}
					alt="auth__image"
				/>
			</div>
			<div className="auth__container">
				<Outlet />
			</div>
		</div>
	);
}

export default AuthLayout;