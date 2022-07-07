import { Outlet, Link } from "react-router-dom";

const ThemeButton = (props) => {
    return (
        <Link to={props.target} className="btn theme-button text-white text-uppercase rounded-0 border-0">{props.label} <i className="bi bi-chevron-right"></i></Link>
    )
}

export default ThemeButton