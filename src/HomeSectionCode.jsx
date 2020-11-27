import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const HomeSectionCode = (props) => {
    return (
        <>
            <div className="card card-cascade wider reverse">
                <div className="view view-cascade overlay">
                    <img className="card-img-top" src={props.imgSrc}
                        alt="Card image cap" />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body card-body-cascade text-center card_div" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                    <h4 className="card-title"><strong>{props.movieTitle}</strong></h4>
                    <h6 className="font-weight-bold indigo-text py-2">{props.subTitle}</h6>
                    <p className="card-text">{props.movieParagraph}</p>
                    <a href="https://www.facebook.com/irfoMIB" className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"><LinkedInIcon></LinkedInIcon></i></a>
                    <a href="https://www.facebook.com/irfoMIB" className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"><TwitterIcon></TwitterIcon></i></a>
                    <a href="https://www.facebook.com/irfoMIB" className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"><FacebookIcon></FacebookIcon></i></a>
                </div>
            </div>
        </>

    )

}
export default HomeSectionCode;