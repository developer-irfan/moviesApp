import React from 'react';
import MoviesCards from './MoviesCards';
import MovieCardDetails from './MovieCardDetails';
import HomeSectionCode from './HomeSectionCode';
const AllMovies = () => {
    return (
        <>
            <HomeSectionCode
                imgSrc="https://static3.srcdn.com/wordpress/wp-content/uploads/2018/12/Spider-Man-Movies-Ranked.jpg"
                movieTitle="All Movies"
                subTitle="Movie Rated"
                movieParagraph="Movies are for fun and Entertainment So there are the list of All movies you can watch it and enjoy your favourite movies You can also go to top movies lists and check the top Rated movies include hollywood and bollywood movies!"
            />
            <br />
            <br></br>
            <br></br>
            <div className="container-fluid">
                <div className="row row-margin-05">
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
export default AllMovies;