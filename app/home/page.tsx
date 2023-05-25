'use client'
import Image from "next/image"
import Lee from '@/public/assets/poster.png'
import Nabvar from "@/components/Nabvar"
import FeaturedMovies from "@/components/FeaturedMovies"
import { useFetch } from '@/hooks/useFetch' 
import { movies } from "@/components/MovieList"


const metadata = {
    title: 'Welcome to Movix',
}


const Home = () => {
  const {data:features} = useFetch(movies.movie.TopRatedMovies) as any
  const {data:arrival} = useFetch(movies.movie.HeaderMovies) as any

console.log(arrival)
  return (
    <main className="relative w-full flex flex-col gap-10">
      <section className=" min-h-full">
      <Nabvar/>
        <Image
          src={Lee}
          alt="John Wick"
          className="w-full min-h-full  -z-10"
          priority
        />
      </section>
      
    <div className="px-2 sm:px-7 md:px-24 dark:bg-main-dark-bg">
      <FeaturedMovies
        title='Featured Movies'
        data={features?.results}
      />
      <FeaturedMovies
        title='New Arrival'
        data={arrival?.results}
      />
    </div>
    </main>
  )
}

export default Home