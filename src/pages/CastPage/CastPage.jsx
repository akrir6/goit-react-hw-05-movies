import { BadRequest } from "components/BadRequest/BadRequest";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "services/themoviedbAPI";
import { CastItem, CastWrapper } from "./CastPage.styled";

const CastPage = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        getMovieCredits(movieId).then(response => {
            setMovieCast(response?.cast ?? []);
            setEmpty(!response?.cast.length);
        })
    }, [movieId]);

    return (
        <CastWrapper>
            {movieCast &&
                movieCast.map(({ id, name, profile_path }) => (
                    <CastItem key={id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            alt={name}
                        />
                        <p>{name}</p>
                    </CastItem>
                ))}        
             {empty && <BadRequest>There is no information about the cast</BadRequest>}
        </CastWrapper>
    )
}

export default CastPage;