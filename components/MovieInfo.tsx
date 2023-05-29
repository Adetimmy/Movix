import Image from "next/image"
import imdb from '@/public/assets/IMDB.png'
import tomato from '@/public/assets/tomato.png'
import youtube from '@/public/assets/Button.png'
import { DataProps } from "./FeaturedMovies"


interface Props{
data:DataProps
}


export const MovieInfo = ({data}:Props) => {

  
  return (
    <div className='absolute top-16 sm:top-28 md:top-44 2xl:top-64 text-white flex flex-col font-display pt-3 px-2 sm:px-7 md:px-24'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl sm:font-bold font-medium 2xl:text-9xl'>
            {/* John Wick 3: <br className='hidden md:block'/> Parabellum */}
            {data?.original_title || data?.original_name || ''}
        </h1>
        <div className="flex items-center gap-5 sm:mt-4 mt-2">
            <div className="flex items-center gap-2">
                <Image 
                    src={imdb}
                    alt='Imdb'
                />
                {data?.vote_average && (
                <small className="text-[10px] sm:text-xs">
                  {(data?.vote_average || '' as any).toFixed(0) * 10}/100
                </small>
              )}
            </div>

            <div className="flex items-center gap-2">
                <Image 
                    src={tomato}
                    alt='tomato'
                />
                <small className="text-xs ">97%</small>
            </div>

            <Image
                src={youtube}
                alt="youtube"
                className="cursor-pointer lg:hidden w-1/5"
            />
        </div>

        <p className="text-xs sm:text-sm md:text-base lg:w-1/3 md:1/4 mt-2 hidden sm:block 2xl:text-5xl">{data?.overview || ''}</p>

        <Image
        src={youtube}
        alt="youtube"
        className="mt-4 cursor-pointer hidden lg:block"
        />
    </div>
  )
}
