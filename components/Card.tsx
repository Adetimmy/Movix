'use client'
import { useState } from "react";
import Image from "next/image";
import Stranger from "@/public/assets/strange.png";
import imdb from "@/public/assets/IMDB.png";
import tomato from "@/public/assets/tomato.png";
import { DataProps } from "./FeaturedMovies";
import { image } from "./MovieList";
import { FaRegHeart } from "react-icons/fa";
import  like  from '@/public/assets/redLove.svg'
import  likegray  from '@/public/assets/icon.svg'

interface InfoTech {
  info: DataProps;
  size?: number;
  height?: number;
  icon?: React.ReactNode;
}

const Card = ({ info, size, height, icon }: InfoTech) => {
  
  const [likeMovies, setlikeMovies] = useState(false)

    const dateConvert = (date: any) => {
        const data = new Date(date);
        const day = data.getDate().toString().padStart(2, "0");
        const month = (data.getMonth() + 1).toString().padStart(2, "0");
        const year = data.getFullYear().toString();
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate;
  };


  return (
    <div
      className={`w-[150px] sm:w-[250px] my-10  relative`}
      style={{ minWidth: size ? size : "", height: height ? height : "" }}
    >
      {!size  && info.overview && (
        <div className="absolute top-0 z-20 flex justify-between p-1 w-full">
          
          <div className="rounded-2xl bg-[#F3F4F6] p-1" style={{opacity: info.media_type? "0.5" : '0'}}>
            <p className="text-lg font-bold">{info.media_type? (info.media_type) : ''}</p>
          </div>
          
          
          <p className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer opacity-50">
            <Image 
              src={likeMovies? like : likegray}
              alt="like icon"
              onClick={() => setlikeMovies(prev => !prev)} 
            />
          </p> 
        </div>
      )} 
      <div className="relative flex flex-col">
        
        {size &&
        <div className="absolute top-[120px] flex justify-center items-center w-full bg-transparent">
        {icon}
        </div>
        }
        
        <Image
          src={image + (info.poster_path || info.profile_path)}
          alt='img_Poster'
          style={{ objectFit: "fill", height:height? height : '', width: size? size: '' }}

        />
      </div>
      {!size && !info.known_for && (
        <div className="flex flex-col justify-center p-2">
          <small className="dark:text-gray-400">
            usa {dateConvert(info.release_date || info.first_air_date)}
          </small>
          <p className="font-bold dark:text-gray-300 text-[#111827]">
            {info.original_name || info.title || info.original_title }
          </p>
          <div className="flex dark:text-gray-400 items-center justify-between gap-4 my-1.5">
            <div className="flex items-center gap-1">
              <Image src={imdb} alt="Imdb" />
              {info.vote_average && (
                <small className="text-[10px] sm:text-xs">
                  {(info.vote_average as any).toFixed(0) * 10}/100
                </small>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Image src={tomato} alt="tomato" />
              <small className="text-[10px] sm:text-xs">97%</small>
            </div>
          </div>
          {!info.known_for && (
            <small className="dark:text-gray-400">Action, Adventure, Horror</small>
          )}
        </div>
      )}
      {size && height && (
          <p className="font-bold text-[#111827] dark:text-gray-300 sm:text-xl md:2xl">{info.title || info.original_title || info.original_name}</p>
      )}
      { info.known_for && (
          <p className="font-bold text-[#111827] dark:text-gray-300 sm:text-xl md:2xl">{info.name}</p>
      )}
    </div>
  );
};

export default Card;
