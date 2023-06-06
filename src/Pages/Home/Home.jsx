import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";

const Home = () => {
    const [movies, setMovies] = useState([])
 
    useEffect(() => {
        fetch('./movies.json')
        .then(res =>res.json())
        .then(data => setMovies(data))
      }, [])



    return (
        <div className="row gap-4 mx-auto justify-content-center align-items-center my-5">
            {
                movies.map( movie =><MovieCard
                key={movie.show.id}
                movie={movie}
                >
                    
                </MovieCard>)
            }
            
        </div>
    );
};

export default Home;