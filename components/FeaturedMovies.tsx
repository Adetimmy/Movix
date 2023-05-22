'use client'
import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri"
import Card from "./Card"
import { SlArrowRight, SlArrowLeft} from "react-icons/sl"

interface TitleProps{
    title:string
}

const FeaturedMovies = ({title}:TitleProps) => {

  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [seeMore, setSeeMore] = React.useState<Boolean>(false)

const scroll = (direction: string) => {
 
  if (scrollRef.current) {
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollRef.current.scrollLeft - 300 : scrollRef.current.scrollLeft + 300,
      behavior: 'smooth',
    });
  }
}

  return (
    <>
    <div className="flex justify-between">
        <h1 className="font-bold dark:text-gray-600 md:text-2xl">{title}</h1>
        <p className="text-[#BE123C] text-xs sm:text-sm md:text-base flex items-center gap-1.5 cursor-pointer" onClick={() => setSeeMore(prev => !prev)}>{seeMore? "See less" : "See more"}<RiArrowRightSLine/></p>
    </div>


    <div className="flex item-center  relative">
    
      <SlArrowLeft fontSize={23} className={`cursor-pointer absolute top-[40%] left-0 text-black dark:text-white font-extrabold ${seeMore? 'hidden' :'inline-block' }`} onClick={() => scroll('left')}/>

      <div className="overflow-x-scroll container scroll flex min-w-full px-12 " ref={scrollRef}>
        <div className={`flex gap-12 ${seeMore? 'flex-wrap' :'flex-nowrap' }`}>
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
    
      <SlArrowRight fontSize={23} className={`cursor-pointer absolute top-[40%] right-0 text-black dark:text-white font-extrabold ${seeMore? 'hidden' :'inline-block'}` } onClick={() => scroll('right')} /> 
    </div>
    
    </>
  )
}

export default FeaturedMovies