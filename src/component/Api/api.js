import axios from "axios";

const API_KEY = "f8614ef266064ab3a272b8e9035a38a2";
export const getAllMovies = async (page) =>{
    try{
        const res = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`

        );
       
        return res.data.results;
    }
    catch (error){
        console.log("error while movies api",error);
    }
};


