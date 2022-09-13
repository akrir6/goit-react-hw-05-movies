import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "services/themoviedbAPI";
import { CastItem, CastWrapper } from "./CastPage.styled";

const CastPage = () => {
    const [movieCast, setMovieCast] = useState(null);
    const { movieId } = useParams();
    useEffect(() => {
        getMovieCredits(movieId).then(response=>setMovieCast(response?.cast));
    }, [movieId]);

    return (
        <>
            {movieCast && 
            <CastWrapper>
                {movieCast.map(({ id, name, profile_path }) => (
                    <CastItem key={id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                            alt={name}
                        />
                        <p>{name}</p>
                    </CastItem>
                ))}        
            </CastWrapper>}
        </>
    )
}

export default CastPage;