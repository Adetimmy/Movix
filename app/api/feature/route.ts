import axios from 'axios';
import { NextResponse } from 'next/server';
import { movies } from '@/components/MovieList';


const Api_key = process.env.API_KEY
const token = process.env.TOKEN

const options = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};


export async function GET() {
  try {
    const response = await axios.get(`${movies.movie.TopRatedMovies + 'cf0697c3093ede8a9be759954df1540c'}`, options);
    const data = response.data;
    return NextResponse.json({data});
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
