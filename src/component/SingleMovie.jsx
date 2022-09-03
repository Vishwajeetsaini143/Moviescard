import { useEffect, useState } from 'react'
import React from 'react'
import { getAllMovies } from './Api/api'
import { useParams } from 'react-router-dom'


const SingleMovie = () => {

    const [movie, setMovies] = useState([])

    const { id } = useParams();
 const fetchMovies = async () => {
        const data = await getAllMovies(1);
const fillArr = data.filter((movie) => movie.original_title === id)
        console.log(fillArr[0])
  setMovies(fillArr[0])
 }
 useEffect(() => {
    fetchMovies()
     }, )
 return (
        <div className='card'>
             <img src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} alt="" />

            <h1>{movie?.original_title && movie.original_title}</h1>
            <h1>{movie?.original_name && movie.original_name}</h1>

        </div>
    )
}

export default SingleMovie