import Image from "next/image"
import Lee from '@/public/assets/poster.png'
import Nabvar from "@/components/Nabvar"
import FeaturedMovies from "@/components/FeaturedMovies"


export const metadata = {
    title: 'Welcome to Movix',
}
const Home = () => {
  return (
    <main className="relative w-full flex flex-col gap-10">
      <section className=" min-h-full">
      <Nabvar/>
        <Image
          src={Lee}
          alt="John Wick"
          className="w-full min-h-full  -z-10"
        />
      </section>
      
    <div className="px-2 sm:px-7 md:px-24 dark:bg-main-dark-bg">
      <FeaturedMovies
        title='Featured Movies'
      />
    </div>
    </main>
  )
}

export default Home