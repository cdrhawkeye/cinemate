import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm='') => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?${queryTerm ? "query=" + queryTerm + "&": ''}language=en-US&page=1`;

    useEffect(() => {
        async function fetchMovies() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: process.env.REACT_APP_TMDB_AUTHORIZATION_KEY
                }
            };
            const response = await fetch(url, options)
                .catch(err => console.error(err));
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url]);

    return { data };
}
