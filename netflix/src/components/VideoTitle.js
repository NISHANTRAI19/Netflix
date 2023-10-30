import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-tr from-black'>
      <h1 className='text-6xl font-bold  sm:text-2xl text-white'>{title}</h1>
      <p className='py-6 text-lg sm:text-sm w-1/2 lg:w-1/4 text-white '>{overview}</p>
      <button className='bg-gray-700 bg-opacity-50 rounded-sm text-white py-2 px-7 text-lg'>Play</button>
      <button className='bg-gray-700 bg-opacity-50 rounded-sm text-white py-2 px-7 ml-2 text-lg'>More Info</button>
    </div>
  )
}

export default VideoTitle