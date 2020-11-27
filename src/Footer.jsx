import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>

            <footer className="page-footer font-small stylish-color-dark bg-dark text-white pt-4">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Movies Website</h5>
                            <p>Movies Lists are here in the form of list you can check the list of all
                            categories and watch your favourite one movies.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">All Movies</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink exact to="/topmovies" className="text-white">Top Rated</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/hollywood" className="text-white">HollyWood</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/newmovies" className="text-white">Upcoming</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/" className="text-white">Movies List</NavLink>
                                </li>
                            </ul>

                        </div>


                        <hr className="clearfix w-100 d-md-none"></hr>


                        <div className="col-md-2 mx-auto">


                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">HollyWood</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <NavLink exact to="/topmovies" className="text-white">Top Rated</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/newmovies" className="text-white">Upcoming</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/hollywood" className="text-white">Movies List</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/" className="text-white">All Movies</NavLink>
                                </li>
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink exact to="/topmovies" className="text-white">Top Rated</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/newmovies" className="text-white">Upcoming</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/hollywood" className="text-white">Movies List</NavLink>
                                </li>
                                <li>
                                    <NavLink exact to="/" className="text-white">All Movies</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <hr></hr>


                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/irfoMIB" className="btn-floating btn-fb mx-1 text-white">
                            <i className="fab fa-facebook-f"> <FacebookIcon /> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com/M_irfan288" className="btn-floating btn-tw mx-1 text-white">
                            <i className="fab fa-twitter"> <TwitterIcon /> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/muhammad-irfan-26474317b/" className="btn-floating btn-gplus mx-1 text-white">
                            <i className="fab fa-google-plus-g"> <LinkedInIcon /> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/" className="btn-floating btn-li mx-1 text-white">
                            <i className="fab fa-linkedin-in"> <InstagramIcon /> </i>
                        </a>
                    </li>
                </ul>
                <div className="footer-copyright text-center py-3">© 2020 Copyright :
                 <a href="http://irfanofficial.ml" className="text-white pl-2">
                        Irfan Official
                  </a>
                </div>
            </footer>
        </>
    )
}
export default Footer;