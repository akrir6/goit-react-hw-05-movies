import { MovieWrapper, MovieLink } from "./MovieList.styled";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

const MovieList = ({ items }) => {
    const location = useLocation();

    return (
        <MovieWrapper>
            {items.map(({ id, title, poster_path }) => (
                <li key={id}>
                    <MovieLink to={`/movies/${id}`} state={{from: location}}>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                    />
                    <p>{title}</p>
                </MovieLink>
                </li>
            ))}
        </MovieWrapper>
    )
}

export default MovieList;

MovieList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        poster: PropTypes.string,
    })).isRequired
}