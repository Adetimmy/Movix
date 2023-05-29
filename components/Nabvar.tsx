import logo from '@/public/assets/Logo.png'
import Image from 'next/image'
import { MdSearch } from "react-icons/md"
import { MovieInfo } from './MovieInfo'
import { DataProps } from './FeaturedMovies'
import NavDetails from './NavDetails'


type infoProp = {
  info:DataProps
}

const Nabvar = ({info}:infoProp) => {

  
  return (
    <nav className='min-w-screen min-h-screen relative'>
      <div className='bg-transparent absolute top-0 z-20 pt-3 px-2 sm:px-7 md:px-24 mb-24 w-full'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Image
                src={logo}
                alt='logo'
                className='w-[90px] sm:w-full'
            />
            </div>
            
            <div className=' flex items-center relative '>
                <input
                    type='text'
                    placeholder='What do you want to watch?'
                    className=' ring-2 ring-white rounded-lg p-1 sm:p-2 sm:w-[300px] lg:w-[500px] bg-transparent text-white sm:placeholder:text-white font-display font-thin text-sm placeholder:text-xs md:placeholder:text-base placeholder:break-words placeholder:text-[rgba(255,255,255,0.3)]'

                />
                <MdSearch color='white' className='absolute right-1 text-lg sm:text-xl cursor-pointer'/>
            </div>
          
            <div className='flex items-center gap-4'>
              <p className='text-white text-xs md:text-lg sm:text-sm hidden sm:inline-block'>Hi, Ademola</p>
              <div className='bg-[#BE123C] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center gap-1 flex-col p-2'>
                <div className='w-6 h-[2px] bg-white'/>
                <div className='w-6 h-[2px] bg-white'/>
              </div>
            </div>

      </div>
      </div>
        

        <div>
          <NavDetails
            data={info}
          />
        </div>
        
    </nav>
  )
}

export default Nabvar

