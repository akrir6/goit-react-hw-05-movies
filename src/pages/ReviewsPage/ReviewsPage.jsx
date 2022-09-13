import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/themoviedbAPI";
import { ReviewsItem, ReviewsWrapper } from "./ReviewsPage.styled";


const ReviewsPage = () => {
    const [movieReviews, setMovieReviews] = useState(null);
    const { movieId } = useParams();
    useEffect(() => {
        getMovieReviews(movieId).then(response=>setMovieReviews(response?.results));
    }, [movieId]);
    
    return (
        <>
            {movieReviews && 
            <ReviewsWrapper>
                {movieReviews.map(({ id, content, author }) => (
                    <ReviewsItem key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </ReviewsItem>
                ))}        
            </ReviewsWrapper>}
        </>
    )
}

export default ReviewsPage;