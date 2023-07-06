'use client'
import Image from "next/image"
import Lee from '@/public/assets/poster.png'
import Nabvar from "@/components/Nabvar"
import FeaturedMovies from "@/components/FeaturedMovies"
import { useFetch } from '@/hooks/useFetch' 
import { movies } from "@/components/MovieList"
import { ImSpinner9 } from "react-icons/im"
import { BsPlayCircle } from "react-icons/bs"
import Loading from "../../app/loading"
import Footer from "@/components/Footer"
import { err } from "@/utils/api"


const metadata = {
    title: 'Welcome to Movix',
}


const Home = () => {
  const {data:features, loading:load1} = useFetch(movies.movie.TopRatedMovies) as any
  const {data:arrival, loading:load2} = useFetch(movies.movie.HeaderMovies) as any
  const {data:videos, loading:load3} = useFetch(movies.movie.ExclusiveVideos) as any
  const {data:last, loading:load4} = useFetch(movies.movie.FeaturedCast) as any
  const { data:header, loading:load} = useFetch(movies.movie.HeaderMovies) as any


  if(load1 && load2 && load3 && load4 && load){
    return <Loading />
  }

  else if(err){
   
    return (
      <div className='bg-white dark:bg-gray-900 flex justify-center flex-col items-center min-h-screen' >
          <h1 className='text-lg md:text-2xl dark:text-gray-400 font-semibold'>something went wrong! </h1>
          <p className="dark:text-gray-400 mb-3 font-semibold"> {err.message}</p>
          <button onClick={ () => window.location.reload()} className="py-1.5 px-2.5 rounded-lg bg-purple-800 dark:bg-red-500 text-gray-200 font-semibold shadow-md">
            Try again
          </button>
      </div>
    )
  }

return (

      <main className="relative w-full flex flex-col gap-10">
      <section className="min-h-full">
      <Nabvar
      info={header}
      />
        
      </section>

      {
        !features && !arrival && !videos && !last && (
        <div className="flex justify-center w-full">
          <ImSpinner9 className="animate-spin dark:text-blue-700 text-center md:text-7xl sm:text-4xl text-2xl"/>
        </div>
        )
      }
      
    <div className="px-2 sm:px-7 md:px-24 dark:bg-main-dark-bg" id="next">
      {features && 
        <FeaturedMovies
        title='Featured Movies'
        data={features?.results}
      />
    }
      {arrival &&
        <FeaturedMovies
        title='New Arrival'
        data={arrival?.results}
      />
      }

    {videos &&
        <FeaturedMovies
        title='Exclusives Videos'
        data={videos?.results}
        size = {450}
        height = {250}
        autoPlay = {<BsPlayCircle fontSize={45} color="white"/>}
      />
     
      }

{last && 
        <FeaturedMovies
        title='Featured Casts'
        data={last?.results}
      />
      }
      
    </div>
    <Footer/>
    </main>

    ) 
}

export default Home