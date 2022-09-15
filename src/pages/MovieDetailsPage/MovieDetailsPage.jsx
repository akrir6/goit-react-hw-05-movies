import { Outlet, useLocation } from "react-router-dom";
import { Container, MovieNavInfo, NavItem, BackLink } from "./MovieDetailsPage.styled";
import { lazy, Suspense, useState } from "react";
import { useEffect } from "react";

const MovieInfo = lazy(() => import("components/MovieInfo/MovieInfo"));

const MovieDetailPage = () => {
    const location = useLocation();
    const [backLink, setBackLink] = useState('/');

    useEffect(() => {
        setBackLink(location.state?.from ?? '/');  
    },[location.state?.from])
    
    return (
        <Container>
            <BackLink to={backLink}>Go Back</BackLink>
            <MovieInfo/>
            <MovieNavInfo>
                <li>
                    <NavItem to="cast" state={{from: backLink}}>Cast</NavItem>
                </li>
                <li>
                    <NavItem to="reviews" state={{from: backLink}}>Rewiews</NavItem>
                </li>    
            </MovieNavInfo>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}

export default MovieDetailPage;
