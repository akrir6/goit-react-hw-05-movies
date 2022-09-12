import { FilmWrapper, FilmLink } from "./FilmList.styled";
import PropTypes from 'prop-types';

const FilmList = ({items}) => {
    return (
        <FilmWrapper>
            {items.map(({ id, title, poster_path: poster }) => (
                <FilmLink key={id} to={`movies/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        alt={title}
                    />
                    <p>{title}</p>
                </FilmLink>
            ))}
        </FilmWrapper>
    )
}

export default FilmList;

FilmList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        poster: PropTypes.string,
    })).isRequired
}