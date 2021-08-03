import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, medium_cover_image, genres}) {
    return (
        // 라우팅시 props 보내기
        <Link to={{
            pathname:`/movie/${id}`,
            state: {
                id, 
                year,
                title,
                summary,
                medium_cover_image,
                genres
            }
        }}>
            <div className="movie">
                <img src={medium_cover_image} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title" /*style={{color:"blue"}}*/>{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {
                        genres && // undefined check
                        genres.map((genre, index) => 
                            <li key={index} className="genres__genre">{genre}</li>    
                        )}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 500)}</p>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;