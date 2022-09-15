import { Outlet, useLocation } from "react-router-dom";
import { Container, MovieNavInfo, NavItem } from "./MovieDetailsPage.styled";
import { lazy, Suspense, useState } from "react";
import BackLink from "components/BackLink/BackLink";
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
            <BackLink to={backLink}/>
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
