import { useState, useEffect } from "react";
import { getMovieByID,getMovieCredits,getMovieReviews,getTrendingMovies,getMoviesByQuery } from "./../services/themoviedbAPI";
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import HomePage from "../pages/HomePage/HomePage";

export const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {results} = await getTrendingMovies();
      setMovies(results);
    })();
  }, [])
  
 // getMovieByID(532639);
  // getMovieCredits(532639);
  // getMovieReviews(532639);
  // getMoviesByQuery('car');
  return (      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage items={movies} />}/>
        <Route path="movies" element={<p>Movies finder</p>}/>
        <Route path="movies/:movieId" element={<p>MovieDetails</p>}>
          <Route path="cast" element={<p>Cast</p>} />
          <Route path="reviews" element={<p>Reviews</p>}/>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}


