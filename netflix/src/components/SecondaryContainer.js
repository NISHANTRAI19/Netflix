import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies.nowPlayingMovies)
        
        const popular=useSelector(store=>store.movies.popularMovies)

  return (
    movies &&<div className='relative z-10 -mt-72 pl-4  bg-opacity-70'>
      <MovieList title={"Trending"} movies={movies}/>
      <MovieList title={"Popular"} movies={popular}/>
      <MovieList title={"Comdedy"} movies={movies}/>
      <MovieList title={"Fresh"} movies={movies}/>

      <MovieList title={"Adventure"} movies={movies}/>
      <MovieList title={"Documentry"} movies={movies}/>
      <MovieList title={"Top"} movies={movies}/>


    </div>
  )
}

export default SecondaryContainer