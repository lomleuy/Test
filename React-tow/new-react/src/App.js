import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import List from "./component/List";
import Detail from "./component/Detail";
import Navbar from "./component/navbar";
import Home from "./component/Home";
import About from "./component/About";
import Movie from "./component/Movie";
import Contact from "./component/Contact";
import Login from "./component/login";
import { FaSearch } from "react-icons/fa";

function App() {
  const [movies, setMovie] = useState([]);

  const [searchkeyword, setsearchKeyword] = useState("");
  const getAllMovies = async (keyword) => {
    const url = keyword
      ? "https://api.themoviedb.org/3/search/movie"
      : "https://api.themoviedb.org/3/movie/popular";
    const key = "e2fb62a9e03cea6c14ff6b085be30e76";
    const res = await fetch(`${url}?api_key=${key}&&query=${searchkeyword}`);
    const movies = await res.json();
    setMovie(movies.results);
    console.log(movies);
  };

  useEffect(() => {
    getAllMovies(searchkeyword);
  }, []);
  return (
    <div>
      <Navbar />
      {  
      <div className='search-box mt-3 flex items-end m-auto justify-end'>
      <button class="btn-search" onClick={()=>{
        getAllMovies(searchkeyword);
        setsearchKeyword("");
      }} ><FaSearch/></button>
      <input type='text' value={searchkeyword} onChange={e=>setsearchKeyword(e.target.value)} class='input-search' 
        
       placeholder='Type to Search...'/>
      </div>
      }
      
        <div className="mt-5">

          {
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/movie" element={<Movie />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<List movies={movies} />}></Route>
              <Route path="/detail/:id" element={<Detail />}></Route>
            </Routes>
          }
        </div>
      </div>
  );
}

export default App;
