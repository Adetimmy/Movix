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


const metadata = {
    title: 'Welcome to Movix',
}


const Home = () => {
  const {data:features} = useFetch(movies.movie.TopRatedMovies) as any
  const {data:arrival} = useFetch(movies.movie.HeaderMovies) as any
  const {data:videos} = useFetch(movies.movie.ExclusiveVideos) as any
  const {data:last} = useFetch(movies.movie.FeaturedCast) as any
  const { data:header } = useFetch(movies.movie.HeaderMovies) as any

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