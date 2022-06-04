import React from "react";
import { useEffect, useState } from "react";
import Cards from "./cards.js";
let apiUrl = "https://omdbapi.com/?i=tt3896198&apikey=73e7e62a";
const Body = (props) => {
  let [movie, setmovie] = useState([]);
  const fetchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const movies = await response.json();
    setmovie(movies.Search);
  };

  useEffect(() => {
    console.log(props);
    if(props.searchKey!=""){
        fetchMovies(props.searchKey);
    }
    else{
        fetchMovies("home");
    }
  },[props.searchKey]);
  return (
    <div className="container p-5 my-3 bg-dark text-white  ">
      {
          movie?.length > 0 ? (
              <div className="d-flex justify-content-around flex-wrap ">
                  {
                    movie.map((mov) => (
                    <Cards movie={mov} key={mov.imdbID}></Cards>
                    ))
                  }
              </div>
          )
          :(
            <div className="alert alert-danger text-danger text-center">No movies found</div>
          )
      }
    </div>
  );
};
export default Body;
