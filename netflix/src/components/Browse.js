import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
 
  
 useNowPlayingMovies();
 usePopularMovies();


  return (
    
    <div className='bg-black'>
      <Header/>
      <MainContainer/>
     <SecondaryContainer/>
      </div>
  )
}

export default Browse