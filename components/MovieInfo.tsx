import Image from "next/image"
import imdb from '@/public/assets/IMDB.png'
import tomato from '@/public/assets/tomato.png'
import youtube from '@/public/assets/Button.png'
import { DataProps } from "./FeaturedMovies"


interface Props{
data:DataProps
}


export const MovieInfo = ({data}:Props) => {

  console.log(data)
  return (
    <div className='absolute top-44 2xl:top-64 text-white flex flex-col font-display pt-3 px-2 sm:px-7 md:px-24'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl sm:font-bold font-medium 2xl:text-9xl'>
            {/* John Wick 3: <br className='hidden md:block'/> Parabellum */}
             {data?.name || data?.original_title || data?.original_name || ''}
        </h1>
        <div className="flex items-center gap-5 2xl:gap-[180px] sm:mt-4 mt-2 text-white 2xl:my-4">
            <div className="flex items-center gap-2">
                <Image 
                    src={imdb}
                    alt='Imdb'
                    className="2xl:w-[76px]"
                />
                {data?.vote_average && (
                <small className="text-[10px] sm:text-xs 2xl:text-2xl">
                  {(data?.vote_average || '' as any).toFixed(0) * 10}/100
                </small>
              )}
            </div>

            <div className="flex items-center gap-2">
                <Image 
                    src={tomato}
                    alt='tomato'
                    className="2xl:w-[46px]"
                />
                <small className="text-[10px] sm:text-xs 2xl:text-2xl">97%</small>
            </div>

            <Image
                src={youtube}
                alt="youtube"
                className="cursor-pointer lg:hidden w-1/5"
            />
        </div>

        <p className="text-xs sm:text-sm md:text-base md:w-6/12 mt-2 2xl:text-3xl">{data?.overview || ''}</p>

        <Image
        src={youtube}
        alt="youtube"
        className="mt-4 cursor-pointer hidden lg:block 2xl:w-[350px] 2xl:mt-10"
        />
    </div>
  )
}
