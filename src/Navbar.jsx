import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
// import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const ToDark = () => {
        document.body.style.backgroundColor = "#3e3e42";
        document.getElementById('drk').innerHTML = "🌕";
    }
    return (
        <>
            <nav className="mb-1 navbar navbar-expand-lg bg-info navbar-dark default-color" style={{ padding: "20px", textDecoration: "none", color: "white" }}>
                <NavLink exact to="/" className="navbar-brand" style={{ paddingLeft: "140px" }}>All Movies</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink exact to="/topmovies" className="nav-link" style={{ textDecoration:"none" , color:"white" }}>Top Movies
                    <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/hollywood" className="nav-link">HollyWood</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/newmovies" className="nav-link">New Movies</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link waves-effect waves-light toggler_btn" id="drk" onClick={ToDark}>🌑</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link waves-effect waves-light">
                                <TwitterIcon></TwitterIcon>
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink exact to="/" className="nav-link waves-effect waves-light" style={{ paddingRight: "220px" }}>
                                <FacebookIcon></FacebookIcon>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;