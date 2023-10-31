import React from 'react'
import { img_cdn } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath)
  return (
    <div className='w-36 pr-2'>

        <img alt="Movie card"
        className='rounded-lg'
        src={img_cdn+posterPath}/>
    </div>
  )
}

export default MovieCard