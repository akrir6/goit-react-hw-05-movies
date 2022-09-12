import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/themoviedbAPI";
import FilmList from 'components/FilmList/FilmList';
import { Container, Title } from './HomePage.styled';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{ 
        getTrendingMovies().then(response=>setMovies(response?.results ?? []));
    }, [])
  
    return (
        <Container>
            <Title>Popular today movies</Title>
            <FilmList items={movies} />
        </Container>
    )
}

export default HomePage;