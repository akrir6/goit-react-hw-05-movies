
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetailPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const CastPage = lazy(() => import("pages/CastPage/CastPage"));
const ReviewsPage = lazy(() => import("pages/ReviewsPage/ReviewsPage"));

export const App = () => {

  return (      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path="movies/:movieId" element={<MovieDetailPage/>}>
          <Route path="cast" element={<CastPage/>} />
          <Route path="reviews" element={<ReviewsPage/>}/>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}


