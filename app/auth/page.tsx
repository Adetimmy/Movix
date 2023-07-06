'use client'
import { useState } from 'react'
import Image from 'next/image'
import logo from "@/public/assets/movie.jpg"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStateContext } from '@/context/Provider'
import { MdOutlineReportGmailerrorred } from 'react-icons/md'
import { ImSpinner7 } from 'react-icons/im'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import Register from '@/components/register/page'
import { firebaseError } from '@/components/firebaseError'

 const metadata = {
  title: 'Sign In',
}

const Sigin = () => {
  const {logIn, loading } = useStateContext()
  const { logInMsg } = firebaseError()

  const [show, setShow] = useState(false)
  const [register, setRegister] = useState(false)

  const [userId, setUserId] = useState<any>({
  email:"", 
  password: ''
  })
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setUserId({ ...userId, [name]: value })
  }


const router = useRouter()

const handleClick = async () => {
  
  try{
    await logIn(userId.email, userId.password)
    router.push('/')

  }

  catch(err:any){
    alert(err.message)
  }

}

  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-2 md:px-0'>{!register && (
      <div className='border-2 border-solid rounded-2xl border-color p-4 flex flex-col items-center shadow-md'>
            <Image
            priority
            src={logo}
            alt='logo'
            />
            <h3 className='welcome font-extrabold text-base pt-5 dark:text-gray-500'>Hi, Welcome</h3>

            <p className='form_text text-xs md:text-sm font-semibold text-center'>Please sign-in to your account and start your experience</p>

            <form className='flex flex-col gap-1 w-full mt-3'>
                <input 
                    type='email'
                    required
                    placeholder='Email'
                    className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm text-slate-400 h-12'
                    autoComplete='on'
                    value={userId.email}
                    name='email'
                    onChange={handleChange}
                />
                <div className='w-full relative flex justify-center items-center'>
                <input 
                    type= {show? 'text':'password'}
                    required
                    placeholder='Password'
                    className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm h-12'
                    autoComplete='on'
                    value={userId.password}
                    name='password'
                    onChange={handleChange}
                />
                    <span className="absolute right-3 top-6" onClick={() => setShow(!show)}>
                      {show ? <BsEye size={21} /> : <BsEyeSlash size={21} />}
                    </span>
                  </div>
                  {logInMsg && <p className='text-red-500 flex items-center gap-1 text-sm sm:text-base'><MdOutlineReportGmailerrorred/>{logInMsg}</p>}
                <button
                type='button'
                className='rounded-lg py-3 px-5 text-center hover:bg-slate-800 bg-black text-slate-200 text-xs md:text-sm font-bold uppercase mt-5 h-12 flex justify-center items-center gap-3'
                onClick={handleClick}
                style={{opacity: loading? '0.4' : ''}}
                  >{loading && 
                    <ImSpinner7 className='text-white animate-spin text-2xl'/>}
                  login
                </button>
            </form>
           
            <p className='my-10 text-xs md:text-sm dark:text-gray-500 font-semibold'>Don't have an account?
              <button className='text-red-600 ml-3 font-semibold' onClick={() => setRegister(true)}>
                Register
              </button>
            </p>
        </div>
    )}
        
       {register && (<Register register={register} setRegister={setRegister}/>)}
    </div>
  )
}

export default Sigin