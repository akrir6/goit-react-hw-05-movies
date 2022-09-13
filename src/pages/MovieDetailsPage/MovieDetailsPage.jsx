import { Outlet } from "react-router-dom";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { Container, MovieNavInfo, NavItem } from "./MovieDetailsPage.styled";

const MovieDetailPage = () => {
    return (
        <Container>
            <button type="button">GO BACK</button>
            <MovieInfo/>
            <MovieNavInfo>
                <li>
                    <NavItem to="cast">Cast</NavItem>
                </li>
                <li>
                    <NavItem to="reviews">Rewiews</NavItem>
                </li>    
               </MovieNavInfo>
            
            <Outlet />
        </Container>
    )
}

export default MovieDetailPage;
