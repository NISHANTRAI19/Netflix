import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./movieSlice";
import { options } from "./constants";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{

    const dispatch=useDispatch();

  
    const getMoviesApi =async ()=>{
      const data =await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options)
      const json= await data.json()
      
      const filteredTrailers = json.results.filter(video=>video.type=="Trailer");
    
      const trailer =filteredTrailers.length?filteredTrailers[0]:json.results[0];
   
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(()=>{
      getMoviesApi()
    },[]);
}

export default useMovieTrailer;