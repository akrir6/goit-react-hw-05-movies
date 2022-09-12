import FilmList from 'components/FilmList/FilmList';
import PropTypes from 'prop-types';
import { Container, Title } from './HomePage.styled';

const HomePage = ({items}) => {
    return (
        <Container>
            <Title>Popular today movies</Title>
            <FilmList items={items} />
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