'use client'
import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri"
import Card from "./Card"
import { SlArrowRight, SlArrowLeft} from "react-icons/sl"

interface TitleProps{
    title:string
}

const FeaturedMovies = ({title}:TitleProps) => {

  const scrollRef = React.useRef<HTMLDivElement>(null);

const scroll = (direction: string) => {
  const current = scrollRef.current;

  if (current) {
    current.scrollLeft += direction === 'left' ? -600 : 600;
  }
};

  return (
    <>
    <div className="flex justify-between">
        <h1 className="font-bold dark:text-gray-600 md:text-2xl">{title}</h1>
        <p className="text-[#BE123C] text-xs sm:text-sm md:text-base flex items-center gap-1.5 cursor-pointer">See more<RiArrowRightSLine/></p>
    </div>


    <div className="flex item-center relative">
    
      <SlArrowLeft fontSize={23} className=" cursor-pointer absolute top-[40%] left-0 text-black dark:text-white font-extrabold" onClick={() => scroll('left')}/>

      <div className="overflow-x-scroll container scroll flex min-w-full px-12 " ref={scrollRef}>
        <div className="flex gap-12 ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>  
      </div>
    
      <SlArrowRight fontSize={23} className="font-extrabold absolute top-[40%] right-0 text-black dark:text-white cursor-pointer" onClick={() => scroll('right')} /> 
    </div>
    
    </>
  )
}

export default FeaturedMovies