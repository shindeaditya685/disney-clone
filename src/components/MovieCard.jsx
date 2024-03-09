import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className=" w-[110px] md:w-[200px] rounded-lg hover:border-[4px] border-gray-400 hover:scale-110 "
        alt="different-genres-movies transition-all duration-150 ease-in cursor-pointer"
      /> 
    </>
  );
}

export default MovieCard