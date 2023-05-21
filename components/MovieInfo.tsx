import Image from "next/image"
import imdb from '@/public/assets/IMDB.png'
import tomato from '@/public/assets/tomato.png'
import youtube from '@/public/assets/Button.png'

export const MovieInfo = () => {
  return (
    <div className='md:mt-10 sm:mt-4 mt-4 text-white flex flex-col font-display 2xl:mt-28'>
        <h1 className='lg:text-5xl sm:text-3xl text-xl sm:font-bold font-medium 2xl:text-9xl'>
            John Wick 3: <br className='hidden md:block'/> Parabellum
        </h1>
        <div className="flex items-center gap-5 sm:mt-4 mt-2">
            <div className="flex items-center gap-2">
                <Image 
                    src={imdb}
                    alt='Imdb'
                />
                <small className="text-xs ">86.0/100</small>
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

        <p className="text-xs sm:text-sm md:text-base lg:w-1/3 md:1/4 mt-2 hidden sm:block 2xl:text-5xl">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

        <Image
        src={youtube}
        alt="youtube"
        className="mt-4 cursor-pointer hidden lg:block"
        />
    </div>
  )
}
