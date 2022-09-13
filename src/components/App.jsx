
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import MovieDetailPage from "pages/MovieDetailsPage/MovieDetailsPage";
import CastPage from "pages/CastPage/CastPage";
import ReviewsPage from "pages/ReviewsPage/ReviewsPage";

export const App = () => {


 // getMovieByID(532639);
  // getMovieCredits(532639);
  // getMovieReviews(532639);

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


