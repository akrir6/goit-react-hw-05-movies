import { useState, useEffect } from "react";
import { getTrendingMovies } from "services/themoviedbAPI";
import MovieList from 'components/MovieList/MovieList';
import { Container, Title } from './HomePage.styled';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{ 
        getTrendingMovies().then(response=>setMovies(response?.results ?? []));
    }, [])
  
    return (
        <Container>
            <Title>Popular today movies</Title>
            <MovieList items={movies} />
        </Container>
    )
}

export default HomePage;