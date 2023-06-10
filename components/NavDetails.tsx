'use client'
import React, { useEffect } from 'react';
import { movies, image } from './MovieList';
import { DataProps } from './FeaturedMovies';
import { MovieInfo } from './MovieInfo';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";

interface Props {
  data: DataProps & any;
}

const NavDetails = ({ data }: Props) => {


  // useEffect(() => {
  //   const mainSwiper = new Swiper('.swiper-container', {
  //     direction: 'vertical',
  //     autoplay: {
  //       delay: 5000,
  //     },
  //   });

  //   const navSwiper = new Swiper('.swiper-container-vertical', {
  //     direction: 'vertical',
  //     slidesPerView: 'auto',
  //     freeMode: true,
  //     mousewheel: true,
  //     controller: {
  //       control: mainSwiper,
  //     },
  //   });
  // }, []);

  return (
    <>
    <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="headerSwiper h-screen w-full"
      >

      {data?.results?.slice(0, 9).map((header: DataProps) => (
         
        <SwiperSlide
        key={header.id} className='h-full'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
            image + header.poster_path
          })`,
          backgroundSize: "cover",
          backgroundRepeat:'no-repeat'
        }}
        >

                <MovieInfo data={header} />

        </SwiperSlide>
            
      ))}
      </Swiper>
    </>
  );
};

export default NavDetails;
