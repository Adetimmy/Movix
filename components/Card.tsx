import Image from "next/image";
import Stranger from "@/public/assets/strange.png";
import imdb from "@/public/assets/IMDB.png";
import tomato from "@/public/assets/tomato.png";
import { DataProps } from "./FeaturedMovies";
import { image } from "./MovieList";
import { FcLike } from "react-icons/fc";

interface InfoTech {
  info: DataProps;
  size?: number;
  height?: number;
  icon?: React.ReactNode;
}

const Card = ({ info, size, height, icon }: InfoTech) => {
  
    const dateConvert = (date: any) => {
    const data = new Date(date);
    const day = data.getDate().toString().padStart(2, "0");
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const year = data.getFullYear().toString();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  console.log(info);
  return (
    <div
      className={`w-[150px] sm:w-[250px] my-10 overflow-hidden relative`}
      style={{ minWidth: size ? size : "", height: height ? height : "" }}
    >
      <div className="w-full relative">
        
        {size &&
        <div className="absolute top-[120px] flex justify-center items-center w-full bg-transparent">
        {icon}
        </div>
      }
        
        <img
          src={image + (info.poster_path || info.profile_path)}
          alt='img_Poster'
          style={{ objectFit: "fill" }}
        />
      </div>
      {!size && !info.name && (
        <div className="flex flex-col justify-center p-2">
          <small className="dark:text-gray-400">
            usa {dateConvert(info.release_date)}
          </small>
          <p className="font-bold dark:text-gray-600">
            {info.title || info.original_title || info.original_name}
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
          <p>Place your additional paragraph content here</p>
      )}
    </div>
  );
};

export default Card;
