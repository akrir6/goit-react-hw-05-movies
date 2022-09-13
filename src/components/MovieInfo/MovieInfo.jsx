import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "services/themoviedbAPI";
import { Wrapper, Poster, Details } from "./MovieInfo.styled";

const MovieInfo = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    useEffect(() => {
        getMovieByID(movieId).then(setMovie);
    }, [movieId]);

    return (
        <>
        {movie && <Wrapper>
            <Poster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}
            />
            <Details>
                <li>
                    <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
                    <p>{`User Score: ${movie.vote_average * 10}%`}</p>
                </li>
                <li>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </li>
                <li>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(g => g.name).join(' ')}</p>
                </li>
            </Details>
        </Wrapper>}
        </>
    )
}

export default MovieInfo;