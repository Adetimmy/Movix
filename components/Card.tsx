import Image from "next/image"
import Stranger from "@/public/assets/strange.png"
import imdb from '@/public/assets/IMDB.png'
import tomato from '@/public/assets/tomato.png'


const Card = () => {
  return (
    <div className="w-[150px] sm:w-[250px] my-10 overflow-hidden">
        <div>
            <Image
            src={Stranger}
            alt="strange"
            />
        </div>
        <div className="flex flex-col justify-center p-2">
        <small className="dark:text-gray-400">usa 2016-current</small>
        <p className="font-bold dark:text-gray-600">Stranger Things</p>
        <div className='flex dark:text-gray-400 items-center  justify-between gap-4 my-1.5'>
            <div className="flex items-center gap-1 ">
                    <Image 
                        src={imdb}
                        alt='Imdb'
                    />
                    <small className="text-[10px] sm:text-xs ">86.0/100</small>
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