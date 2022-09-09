// import { useState, useEffect } from "react";
// import { pixabayGetImages } from "./../services/pixabayAPI";

import { Route, Routes,Navigate } from "react-router-dom"
import { SharedLayout } from "./SharedLayout/SharedLayout"


export const App = () => {
  
  return (      
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<p>Home trending movies</p>}/>
        <Route path="/movies" element={<p>Movies finder</p>}/>
        <Route path="/movies/:movieId" element={<p>MovieDetails</p>}>
          <Route path="/movies/:movieId/cast" element={<p>Cast</p>} />
          <Route path="/movies/:movieId/reviews" element={<p>Reviews</p>}/>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}


