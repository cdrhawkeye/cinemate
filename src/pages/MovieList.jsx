import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components"

export const MovieList = ({apiPath, pageTitle}) => {
    const { data: movies } = useFetch(apiPath);
    useTitle(pageTitle);

    return (
        <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap other:justify-evenly">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    )
}
