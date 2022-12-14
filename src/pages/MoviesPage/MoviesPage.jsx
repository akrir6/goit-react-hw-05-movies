import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import { Container } from "./MoviesPage.styled";
import { getMoviesByQuery } from "services/themoviedbAPI";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useSearchParams } from "react-router-dom";
import { BadRequest } from "components/BadRequest/BadRequest";

const MoviesPage = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            getMoviesByQuery(query).then(response => {
                setSearchedMovies(response?.results ?? []);
                setEmpty(!response?.results?.length)
            });
        }
    },[searchParams])
  
    return (
        <Container>
            <Searchbar />
            {searchedMovies.length > 0 && <MovieList items={searchedMovies} />}
            {empty && <BadRequest>
                Sorry, there are no films matching your search query. Please try again.
            </BadRequest>}
                
        </Container>
    )
}

export default MoviesPage;