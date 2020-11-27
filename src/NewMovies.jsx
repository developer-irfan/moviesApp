import React from 'react'; 
import HomeSectionCode from './HomeSectionCode';
import MoviesCards from './MoviesCards';
import MovieCardDetails from './MovieCardDetails';
const NewMovies = () => {
    return (
        <>
            <HomeSectionCode
                imgSrc="http://cdn.wallpapersafari.com/80/18/8xlmcu.jpg"
                movieTitle="New Movies"
                subTitle="Movie Rated"
                movieParagraph="Movies are for fun and Entertainment So there are the list of New Top movies you can watch it and enjoy your favourite movies You can also go to top movies lists and check the top Rated movies include hollywood and bollywood movies!"
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
export default NewMovies;