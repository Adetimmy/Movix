'use client'
import { Dispatch, SetStateAction, useState} from 'react'
import Image from "next/image"
import logo from "@/public//assets/movie.jpg"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useStateContext } from '@/context/Provider'
import { MdOutlineReportGmailerrorred } from 'react-icons/md'
import { ImSpinner7 } from 'react-icons/im'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { signUpMsg } from '../firebaseError'


const metadata = {
  title: 'Register',
}

const Register = ({register, setRegister}:{
  register:boolean
  setRegister:Dispatch<SetStateAction<boolean>>
}) => {

  const router = useRouter()
  const {signUp, loading } = useStateContext()


  const [show, setShow] = useState(false)
  const [userId, setUserId] = useState<any>({
    userName:'',
    email:"", 
    password: ''
  })

  const {email, password} = userId

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setUserId({ ...userId, [name]: value })
  }

  async function handleClick() {

    try{
      await signUp(email, password, userId)
      .then(
        () => setRegister(false)
      )
      
    
    }

    catch(err:any){
      alert(err.message)
    }
    
  }
  return (

 
        <div className='border-2 border-solid rounded-2xl border-color p-4 flex flex-col items-center shadow-md transition-all'>
              <Image
              priority
              src={logo}
              alt='logo'
              />
              <h3 className='welcome font-extrabold text-base pt-5 dark:text-gray-500'>Hi, Welcome</h3>
  
              <p className='form_text text-xs md:text-sm font-semibold text-center'>Please register to your account and start your experience</p>
  
              <form className='flex flex-col gap-1 w-full mt-3 '>
              
              <input 
                      type='text'
                      value={userId.userName}
                      name='userName'
                      required
                      placeholder='Full Name'
                      className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm text-slate-400 h-12'
                      autoComplete='on'
                      onChange={handleChange}
                  />
                  
                  <input 
                      type='email'
                      value={userId.email}
                      name='email'
                      required
                      placeholder='Email'
                      className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm text-slate-400 h-12'
                      autoComplete='on'
                      onChange={handleChange}
                  />
                  <div className='w-full relative flex justify-center items-center'>
                    <input 
                        type= {show? 'text':'password'}
                        value={userId.password}
                        name='password'
                        required
                        placeholder='Password'
                        className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm
                        h-12
                        '
                        autoComplete='on'
                        onChange={handleChange}
                    
                    />
                    <span className="absolute right-3 top-6" onClick={() => setShow(!show)}>
                      {show ? <BsEye size={21} /> : <BsEyeSlash size={21} />}
                    </span>
                  </div>
                 
                  {signUpMsg && <p className='text-red-500 flex justify-center items-start gap-1'><MdOutlineReportGmailerrorred/>{signUpMsg}</p>}
                  <button
                  type='button'
                  className='rounded-lg py-3 px-5 text-center hover:bg-slate-800 bg-black text-slate-200 text-xs md:text-sm font-bold uppercase mt-5 h-12 flex justify-center items-center gap-3'
                  onClick={handleClick}
                  style={{opacity: loading? '0.4' : ''}}
                  >{loading && 
                    <ImSpinner7 className='text-white animate-spin text-2xl'/>}
                    register
                  </button>
              </form>
  
              <p className='my-10 text-xs md:text-sm dark:text-gray-500'>Already have an account?
                <button className='text-red-600 ml-3 font-semibold' onClick={() => setRegister(false)}>
                  Login
                </button>
              </p>
          </div>
         
   
  )
}

export default Register