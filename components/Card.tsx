
import Image from "next/image"
import Stranger from "@/public/assets/strange.png"
import imdb from '@/public/assets/IMDB.png'
import tomato from '@/public/assets/tomato.png'
import { DataProps } from "./FeaturedMovies"
import { image } from "./MovieList"

interface InfoTech {
    info : DataProps
}

const Card = ({info}:InfoTech) => {
  
  return (
    <div className="w-[150px] sm:w-[250px] my-10 overflow-hidden">
        <div>
            <img
            src={image + info.poster_path}
            alt="strange"
            />
        </div>
        <div className="flex flex-col justify-center p-2">
        <small className="dark:text-gray-400">usa {info.release_date}</small>
        <p className="font-bold dark:text-gray-600">{info.original_title || info.original_name || info.title}</p>
        <div className='flex dark:text-gray-400 items-center  justify-between gap-4 my-1.5'>
            <div className="flex items-center gap-1 ">
                    <Image 
                        src={imdb}
                        alt='Imdb'
                    />
                    <small className="text-[10px] sm:text-xs ">{(info.vote_average as any).toFixed(0) * 10}/100</small>
                </div>

                <div className="flex items-center gap-1">
                    <Image 
                        src={tomato}
                        alt='tomato'
                    />
                    <small className="text-[10px] sm:text-xs">97%</small>
                </div>
        </div>
        <small className="dark:text-gray-400">Action, Adventure, Horror</small>
        </div>
        
    </div>
  )
}

export default Card