import React from "react";
import { Link } from "react-router-dom";

const List = ({ movies }) => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {movies.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w[70%] mx-auto grid grid-cols-5 gap-x-5 gap-y-10 py-5  ">
          {Object.values(movies).map((movie) => (
            <Link to={"detail/" + movie.id} key={movie.id}>
              <div className="h[40vh] cursor-pointer group overflow-hidden">
                <img
                  src={img_url + movie.poster_path}
                  alt=""
                  className="object-cover w-full rounded-lg h[90%] group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <h1 className="text-sm" >{movie.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default List;
