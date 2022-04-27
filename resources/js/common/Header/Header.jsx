import { Outlet, Link } from "react-router-dom";
import { userContext } from "../../contexts/useAuthContext";
import { logo } from "../../images/images";

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
							<div className="col-md-10">
								<ul className="d-flex">
									<li>
										<span><i className="bi bi-search"></i> Search...</span>
									</li>
									<li>
										<span>Rest of Africa <i class="bi bi-chevron-down"></i></span>
									</li>
									<li>
										<Link to='/'>
											Store locator <i class="bi bi-geo-alt"></i>
										</Link>
									</li>
									<li>
										<Link to='/'>
											Help <i class="bi bi-question"></i>
										</Link>
									</li>
									<li>
										<Link to='/'>
											Login <i class="bi bi-lock"></i>
										</Link>
									</li>
									<li>
										<Link to='/'>
											<userContext.Consumer>
												{value => value.auth.username}
											</userContext.Consumer>
											 <i class="bi bi-person-plus"></i>
										</Link>
									</li>
									<li>
										<div className="shop-header-cart position-relative">
											<i class="bi bi-basket3"></i>
											<span>4</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="header-bottom-bar">
						<div className="row">
							<div className="col">
								<ul className="d-flex justify-content-between">
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											Category
										</Link>
									</li>
									<li>
										<Link to='/'>
											#houseofvans
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>


			<Outlet />
		</>
	)
};

export default Header;
