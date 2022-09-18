import { BadRequest } from "components/BadRequest/BadRequest";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/themoviedbAPI";
import { ReviewsItem, ReviewsWrapper } from "./ReviewsPage.styled";


const ReviewsPage = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();
    const [empty, setEmpty] = useState(false);
    useEffect(() => {
        getMovieReviews(movieId).then(response => {
            setMovieReviews(response?.results ?? []);
            setEmpty(!response?.results?.length)
        });
    }, [movieId]);
       
    return (
        <ReviewsWrapper>
            {movieReviews.length > 0 &&
                movieReviews.map(({id, content, author}) => (
                    <ReviewsItem key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </ReviewsItem>
                ))
            }   
            {empty && <BadRequest>
                There are no reviews for this movie
            </BadRequest>}
        </ReviewsWrapper>
    )
}

export default ReviewsPage;