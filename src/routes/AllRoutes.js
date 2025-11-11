import { Routes, Route } from "react-router-dom"
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages"

import React from 'react'

export const AllRoutes = () => {
  return (
    <main className="">
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" pageTitle="Home" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" pageTitle="Popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" pageTitle="Top Rated" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" pageTitle="Upcoming"/>} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound pageTitle="Page Not Found" />} />
        </Routes>
    </main>
  )
}
