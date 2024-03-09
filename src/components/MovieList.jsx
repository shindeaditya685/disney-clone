import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import {IoChevronBackOutline, IoChevronForwardOutline} from "react-icons/io5"
import HrMovieCard from './HrMovieCard';

const screenWidth = window.innerWidth;


function MovieList({genreId, index_}) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, [])


    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then((response) => {
            // console.log(response.data.results);
            setMovieList(response.data.results);
        })
    }

    const slideRight = (element) => {
      element.scrollLeft += screenWidth - 110;
    };
    const slideLeft = (element) => {
      element.scrollLeft -= screenWidth - 110;
    };
  return (
    <div className=" relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[150px] ${
          index_ % 3 === 0 ? "mt-[75px]" : "mt-[150px]"
        }`}
      />

      <div
        ref={elementRef}
        className=" flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5"
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 === 0 ? (
              <HrMovieCard movie={item} key={item.id} />
            ) : (
              <MovieCard movie={item} key={item.id} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        className={`text-[50px] text-white p-2 z-10  top-0 right-0 cursor-pointer hidden md:block absolute mt-[150px] ${
          index_ % 3 === 0 ? "mt-[75px]" : "mt-[150px]"
        }`}
        onClick={() => slideRight(elementRef.current)}
      />
    </div>
  );
}

export default MovieList