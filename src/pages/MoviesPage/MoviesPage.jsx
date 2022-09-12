import { useState, useEffect } from "react";
import FilmList from "components/FilmList/FilmList";
import { Container } from "./MoviesPage.styled";
import { getMoviesByQuery } from "services/themoviedbAPI";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchParams] = useSearchParams();
   
    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            getMoviesByQuery(query).then(response => setSearchedMovies(response?.results ?? []));
        }
    },[searchParams])
    
    return (
        <Container>
            <Searchbar />
            <FilmList items={searchedMovies}/>
        </Container>
    )
}

export default MoviesPage;