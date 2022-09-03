import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllMovies } from './Api/api';

const Movies = () => {
    const[movies,setMovies]=useState([])

    const fetchMovies=async()=>{
        const data=await getAllMovies(1);
console.log(data)
        if(data){

            setMovies(data)
       
      
        }
      
    
        
    
    }
  
    useEffect(() => {
    
        fetchMovies()
    
    }, [])

    if(!movies) return <h1>lading</h1>
    
  return (
    <div className='card-wraper'>

       

{
    
    movies?.map((movie)=>{
        return(
        
            <div className='card'>
                

            <img src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} alt="" />
            <Link to={`/movies/${movie?.original_title ?movie?.original_title:movie.original_name}`}>
            <h1>{movie?.original_title && movie.original_title}</h1>
            <h1>{movie?.original_name && movie.original_name}</h1>
            </Link>
            
            </div>
           
        )
    })
}


    </div> 
  )
}

export default Movies