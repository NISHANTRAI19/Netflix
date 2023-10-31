import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies =()=>{
const dispatch=useDispatch();


const getPopularMovies = async ()=>{


const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
if(!data.ok){
  throw new Error("netowkr errrrorrrrrr")
}
const json =await data.json();
  

dispatch(addPopularMovies(json.results))


}

useEffect(()=>{
    getPopularMovies();
},[])



}

export default usePopularMovies;