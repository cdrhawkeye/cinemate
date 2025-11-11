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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDg2ZTM0MTE4ZWNhZDU2NDk4YmFmNTg4MTFlNGUwNiIsIm5iZiI6MTc2MTI0ODExOS40NDcsInN1YiI6IjY4ZmE4Mzc3ODYxOGY5ODgwYTQxN2NlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6hB-WLvB8I7V-Rq6xzx0tqXDxZxOt946ZwnMquo5OkA'
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
