import React from "react";

const Details = ({selected, closeDetail}) => {
  return (
    <section className="detail">
      <div className="content">
        <h2>{selected.Title}</h2>
        <span>{selected.Year}</span>
        <p className="rating">rating: {selected.imdbRating}</p>

        <div className="about">
          <img src={selected.Poster} alt="" />
          <p>{selected.plot}</p>
        </div>

        <button className="close" onClick={closeDetail}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Details;
