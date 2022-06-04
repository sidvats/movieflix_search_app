import React from "react";
const style = {
  width: "300px",
  height:"400px"
};
const Cards = (props) => {
  return (
    <div  className="card mx-3 my-5 " style={style} >
      <img
        className="card-img-top"
        src={
          props.movie.Poster === "N/A"
            ? "https://via.placeholder.com/400"
            : props.movie.Poster
        }
        alt={props.movie.Title}
      />
      <div className="card-img-overlay">
        <h4 className="card-title">{props.movie.Title}</h4>
        <p className="card-text">{props.movie.Year}</p>
      </div>
    </div>
  );
};
export default Cards;
