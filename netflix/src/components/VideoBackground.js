import React, { useEffect } from 'react'

import {options} from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';
import useMovieTrailer from '../utils/useMovieTrailer';

const VideoBackground = ({movieId}) => {
 
  const trailerVideo= useSelector(store=>store.movies?.trailerVideo)
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe 
      className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&loop=1&autoplay=1&mute=1;controls=0" }
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       ></iframe>
      

    </div>
  )
}

export default VideoBackground;