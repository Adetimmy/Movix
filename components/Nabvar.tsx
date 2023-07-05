'use client'
import { useState } from 'react'
import logo from '@/public/assets/Logo.png'
import User from '@/public/assets/user.jpg'
import Image from 'next/image'
import { MdSearch,MdArrowDropDown, MdArrowDropUp, MdLogout } from "react-icons/md"
import { MovieInfo } from './MovieInfo'
import { DataProps } from './FeaturedMovies'
import NavDetails from './NavDetails'
import { useStateContext } from '@/context/Provider'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


type infoProp = {
  info:DataProps
}

const Nabvar = ({info}:infoProp) => {
const [toggle, setToggle] = useState<any>({
  drop:false,
  nav:false
})
 const router = useRouter()
const {logOut, user} = useStateContext()


const handleSignOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userLoggedIn')
     logOut()
     router.push('/auth')
}


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
            
            <div className='items-center relative hidden sm:flex'>
                <input
                    type='text'
                    placeholder='What do you want to watch?'
                    className=' ring-2 ring-white rounded-lg p-1 sm:p-2 sm:w-[300px] lg:w-[500px] bg-transparent text-white sm:placeholder:text-white font-display font-thin text-sm placeholder:text-xs md:placeholder:text-base placeholder:break-words placeholder:text-[rgba(255,255,255,0.3)]'

                />
            </div>
            <div className='sm:hidden flex bg-gray-500 p-2 rounded-full inset-3 w-1/3 items-center justify-between'>
                <input type='text' placeholder='Search...' className='bg-transparent w-full text-white'/>
                <MdSearch color='white' className='text-lg sm:text-xl cursor-pointer'/>
            </div>
          
            <div className='flex items-center gap-4 relative'>
              <div className='md:flex justify-center items-center gap-1 hidden cursor-pointer relative' onClick={() => { setToggle((prev:any) => {
                return {
                  drop:!prev.drop
                }}
                )}}>
                { user?.photo && <div className='w-12 h-12 rounded-full overflow-hidden border-1 border-black'>
                  <img
                    src={user?.photo}
                    alt='user_img'
                    className='object-fill'
                    //width={1080}
                   // height={600}
                  />
                </div>}
                
                <p className='text-white text-xs md:text-lg sm:text-sm hidden sm:inline-block'>Hi, {user?.displayName || localStorage.getItem('user')}</p>
                {toggle.drop? <MdArrowDropDown color='white' fontSize={23}/> : <MdArrowDropUp color='white' fontSize={23}/>}
                {toggle.drop? <div className='bg-white w-full h-12  shadow-md rounded-md absolute   hover:bg-slate-300 top-12 left-10 flex p-2 items-center  transition-all'>
                  <div className='flex gap-1 items-center cursor-pointer w-full'>
                    <MdLogout  fontSize={27}/>
                    <p className='font-semibold text-lg' onClick={handleSignOut}>Log Out</p>
                  </div>
                </div> : ""}
                
              </div>
              
              <div className='bg-[#BE123C] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center gap-1 flex-col p-2 md:hidden cursor-pointer' onClick={() => { setToggle((prev:any) => {
                return {
                  nav:!prev.nav
                }}
                )}}>
                <div className='w-6 h-[2px] bg-white'/>
                <div className='w-6 h-[2px] bg-white'/>
              </div>

              { toggle.nav && <div className='md:hidden bg-white w-[120px]  shadow-md rounded-md absolute right-0 top-12  flex p-2 items-center  transition-all'>
                <div className='w-full'>
                { user?.photo && (<div className='w-12 h-12 rounded-full overflow-hidden border-1 border-black'>
                  <img
                    src={user?.photo}
                    alt='user_img'
                    className='object-fill'
                    // width={1080}
                    // height={600}
                  />
                </div>)}
                
                <p className='text-black text-sm my-3 font-semibold'>{user?.displayName || localStorage.getItem('user')}</p>
                <div className='flex gap-1 items-center cursor-pointer bg-blue-700 p-2 rounded-md text-white hover:bg-blue-500'>
                    <MdLogout  fontSize={15}/>
                    <p className='font-semibold text-base' onClick={handleSignOut}>Log Out</p>
                  </div>
                </div>
              </div>}
            </div>

      </div>
      </div>
        

        <div>
          <NavDetails
            data={info}
          />
        </div>
        <div className='md:hidden absolute right-0 bottom-24 w-10 h-10 bg-orange-500 p-1 rounded-l-full backdrop-blur-lg shadow-sm cursor-pointer z-20 animate-pulse'>
          <Link href={'#next'}>
            <MdArrowDropDown fontSize={30} className='text-slate-200'/>
          </Link>
        </div>
    </nav>
  )
}

export default Nabvar

