import { Link } from "react-router-dom"

import Backup from "../assets/images/backup.png"

export const MovieCard = ({ movie }) => {
  const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : Backup;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${movie.id}`}>
        <img className="rounded-t-lg" src={imagePath} alt={`movie poster for ${movie.title}`} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
      </div>
    </div>
  )
}
