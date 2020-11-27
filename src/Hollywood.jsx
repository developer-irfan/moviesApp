import React from 'react';
import MoviesCards from './MoviesCards';
import MovieCardDetails from './MovieCardDetails';
import HomeSectionCode from './HomeSectionCode';
const Hollywood = () => {
    return (
        <>
            <HomeSectionCode
                imgSrc="https://images5.alphacoders.com/674/thumb-1920-674367.jpg"
                movieTitle="Hollywood Movies"
                subTitle="Movie Rated"
                movieParagraph="Movies are for fun and Entertainment So there are the list of Hollywood movies you can watch it and enjoy your favourite movies You can also go to top movies lists and check the top Rated movies include hollywood and bollywood movies!"
            />

            <br />
            <br></br>
            <br></br>
            
            <div className="container-fluid">
                <div className="row">
                    {
                        MovieCardDetails.map((value, index) => {
                            return <MoviesCards
                                key={index}
                                movieImgSrc={value.movieImgSrc}
                                movieCardTitle={value.movieCardTitle}
                                movieCardParagraph={value.movieCardParagraph}
                                btn={value.btn}
                                WatchingLink={value.WatchingLink}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Hollywood;