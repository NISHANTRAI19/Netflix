import React from 'react'
import MovieCard from './MovieCard'
import "../App.css"

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className=' text-white pt-2'>
        <h1 className='text-2xl py-4'>{title}</h1>
       <div className='flex overflow-x-scroll scrollbar-hide '>
      
        <div className ='flex '>
            {movies.map(movie=><MovieCard key={movie?.id} posterPath={movie?.poster_path}/>)}
            
        </div>
       </div>
    </div>
  )
}

export default MovieList