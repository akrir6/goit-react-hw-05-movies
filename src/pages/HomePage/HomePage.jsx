import { Container, FilmLink } from "./HomePage.styled";
import PropTypes from 'prop-types';

const HomePage = ({items}) => {
    return (
        <Container>
            {items.map(({ id, title, poster_path: poster }) => (
                <FilmLink key={id} to={`movies/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        alt={title}
                    />
                    <p>{title}</p>
                </FilmLink>
            ))}
        </Container>
    )
}

export default HomePage;

HomePage.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
    {
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        poster: PropTypes.string,
    })).isRequired
}