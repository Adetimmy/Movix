import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.API_TOKEN;
const apiKey = process.env.NEXT_PUBLIC_API_KEY

const headers = {
    Authorization : `Bearer ${TMDB_TOKEN}`,
};

export let err='' as any
export const revalidate = 60


export const fetchDataFromApi = async (url:string) => {

    try{
        const { data } = await axios.get(`${BASE_URL}${url + apiKey}`, { headers });
        return data;
      
    }
    catch (error){
        
        err = error
        console.log(err);
        return error;
    }
}

