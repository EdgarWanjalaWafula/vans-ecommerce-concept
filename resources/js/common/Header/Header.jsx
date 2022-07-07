import { userContext } from "../../contexts/UseAuthContext";
import { logo } from "../../images/images";
import HeaderCategories from "./components/HeaderCategories";
import HeaderTopLinks from './components/HeaderTopLinks'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className="shop-header text-uppercase w-100 position-absolute">
				<div className="container">
					<div className="header-top-bar">
						<div className="row align-items-center">
							<div className="col">
								<Link className="site-logo" to='/'>
									<img src={logo} alt="" />
								</Link>
							</div>
							<div className="col-md-9 offset-1">
								<HeaderTopLinks />
							</div>
						</div>
					</div>
					<HeaderCategories />
				</div>
			</header>
			<Outlet />
		</>
	)
};

export default Header;
