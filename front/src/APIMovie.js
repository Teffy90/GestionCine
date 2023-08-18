import React, { useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "./App.css";

function AppMovie() {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "6ba894e2d824563fbbb2e4b8157839ea";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    //Variables de estado
    const [movies, setMovies] = React.useState([]);
    const [searchKey, setSearchKey] = React.useState("");
    const [movie, setMovie] = React.useState({ title: "Loading Movies" });
    const [trailer, setTrailer] = React.useState(null);
    const [playing, setPlaying] = React.useState(false);

    //Funcion para realizar la peticion por medio de la API
    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover";
        const {
            data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });

        setMovies(results);
        setMovie(results[0]);

        if (results.length) {
            await fetchMovie(results[0].id);
        }
    };

    //funcion para la peticion de un solo objeto y mostrar el trailer
    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
            },
        });

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
        }
        //return data
        setMovie(data);
    };

    const selectMovie = async (movie) => {
        // const data = await fetchMovie(movie.id)
        // console.log(data);
        // setSelectedMovie(movie)
        fetchMovie(movie.id);

        setMovie(movie);
        window.scrollTo(0, 0);
    };

    //funcion para buscar peliculas
    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <div className="container">
                {/* buscador de peliculas */}
                <form onSubmit={searchMovies}>
                    <input
                        type="text"
                        placeholder="Buscar Pelicula"
                        onChange={(e) => setSearchKey(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Buscar
                    </button>
                </form>
                <br />

                <div>
                    <main>
                        {movie ? (
                            <div
                                className="viewtrailer"
                                style={{
                                    backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                                }}
                            >
                                {playing ? (
                                    <>
                                        <YouTube
                                            videoId={trailer.key}
                                            className="reproductor container"
                                            containerClassName={"youtube-container amru"}
                                            opts={{
                                                width: "100%",
                                                height: "100%",
                                                playerVars: {
                                                    autoplay: 1,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }}
                                        />
                                        <button onClick={() => setPlaying(false)} className="boton">
                                            Close
                                        </button>
                                    </>
                                ) : (
                                    <div className="container">
                                        <div className="">
                                            {trailer ? (
                                                <button
                                                    className="boton"
                                                    onClick={() => setPlaying(true)}
                                                    type="button"
                                                >
                                                    Ver Trailer
                                                </button>
                                                
                                            ) : (
                                                "Sorry, no trailer available"
                                            )}
                                            <button
                                            className="boton">
                                                Comprar Entrada
                                            </button>
                                            <h1 className="text-white">{movie.title}</h1>
                                            <p className="text-white bg-secondary">{movie.overview}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </main>
                </div>
                {/* contenedor para mostrar los posters y las peliculas en la peticion a la api */}
                <div className="container mt-3">
                    <div className="row">
                        {movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="col-md-4 mb-3"
                                onClick={() => selectMovie(movie)}
                            >
                                <img
                                    src={`${URL_IMAGE + movie.poster_path}`}
                                    alt=""
                                    height={600}
                                    width="100%"
                                />
                                <h4 className="text-center">{movie.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppMovie;
