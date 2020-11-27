import React from 'react';
const MoviesCards = (props) => {
    return (
        <>
            <div className="col-sm-4">
                <div className="card Cardiv">
                    <div className="view overlay">
                        <img className="card-img-top" src={props.movieImgSrc} alt="Card image cap" style={{ height: "285px" }} />
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.movieCardTitle}</h4>
                        <p className="card-text">{props.movieCardParagraph}</p>
                        <a href={props.WatchingLink} className="btn btn-primary">{props.btn}</a>

                    </div>
                </div>
            </div>
        </>
    )
}
export default MoviesCards;