import React, { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import "../component/style.css";
const Detail = () => {
  const { id } = useParams();

  const [singleMovie, setsingleMovie] = useState({});
  
  const [trailerkey, setTrailerkey] = useState("");
  const [displayTrailer, setDisplyTrailer] = useState(false);
  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=e2fb62a9e03cea6c14ff6b085be30e76&&append_to_response=videos`;

    const res = await fetch(url);
    const movie = await res.json();
    setsingleMovie(movie);
    console.log(movie);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const playTrailer = () => {
    const trailer = singleMovie.videos.results.find(
      (video) => video.name === "Official Trailer"
    );
    const key=trailer ? trailer.key : singleMovie.videos.results[0].key;
    setTrailerkey(key);
    setDisplyTrailer(!displayTrailer);
  };

  const img_url = "https://image.tmdb.org/t/p/w500";
  return singleMovie ? (
    <div>
      <img
        src={img_url + singleMovie.backdrop_path}
        alt=""
        className="fixed w-full h-screen object-cover blur-sm -z-10"
      />
      <div className="w-[70%] mx-auto">
        <div className="more">
          <div className="mt-20">
            <img
              src={img_url + singleMovie.poster_path}
              className="w-48 h-72 rounded-lg"
              alt=""
            />
            <button className="mt-4 rounded-lg px-3 py-1" onClick={playTrailer}>
              {displayTrailer ? "Close Trailer" : "Play Trailer"}
            </button>
            {displayTrailer && (
              <iframe
                width="420"
                height="315"
                allowFullScreen
                src={`https://www.youtube.com/embed/${trailerkey}`}
                className="mt-2 w-80 h-52 rounded"
              ></iframe>
            )}
          </div>
          <div className="fixed right-0 backdrop-blur-lg h-screen w-96 top-0 flex flex-col p-10 overflow-hidden">
            <h1 className="mt-10 text-2xl font-bold tracking-wide">
              {singleMovie.title}
            </h1>
            <p className="mt-2">Rate : {singleMovie.vote_average}</p>
            <p className="mt-2-">Releast Date : {singleMovie.release_date}</p>
            <hr className="mt-3" />
            <p className="mt-2 text-sm">{singleMovie.overview}</p>
            <hr className="mt-3" />
            {singleMovie.genres?.map((gen) => (
              <p className="mt-2 text-sm" key={gen.id}>
                {gen.name}
              </p>
            ))}

            <h1 className="text-md mt-2 uppercase font-bold">
              Production Company
            </h1>
            {singleMovie.production_countries?.map((com) => (
              <p className="mt-2 text-sm" key={com.id}>
                {com.name}
              </p>
            ))}

            <p></p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default Detail;
