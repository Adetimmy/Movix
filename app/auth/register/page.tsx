import Image from "next/image"
import logo from "@/public//assets/movie.jpg"
import Link from "next/link"


export const metadata = {
  title: 'Register',
}

const Register = () => {
  return (

      <div className='flex flex-col justify-center items-center min-h-screen'>
          <div className='border-2 border-solid rounded-2xl border-color p-4 flex flex-col items-center'>
              <Image
              priority
              src={logo}
              alt='logo'
              />
              <h3 className='welcome font-extrabold text-base pt-5'>Hi, Welcome</h3>
  
              <p className='form_text text-xs md:text-sm font-semibold  '>Please register to your account and start your experience</p>
  
              <form className='flex flex-col gap-1 w-full mt-3'>
              
              <input 
                      type='text'
                      required
                      placeholder='Full Name'
                      className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm text-slate-400 h-12'
                      autoComplete='on'
                  />
                  
                  <input 
                      type='email'
                      required
                      placeholder='Email'
                      className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm text-slate-400 h-12'
                      autoComplete='on'
                  />
                  <input 
                      type='password'
                      required
                      placeholder='Password'
                      className='border-color border rounded-lg outline-none mt-3 min-w-full py-2 px-3 text-sm
                      h-12
                      '
                      autoComplete='on'
                  />
  
                  <button
                  type='button'
                  className='rounded-lg py-3 px-5 text-center bg-black text-slate-200 text-xs md:text-sm font-bold uppercase mt-5 h-12'
                  >
                    register
                  </button>
              </form>
  
              <p className='my-10 text-xs md:text-sm'>Already have an account? 
                <Link href={'/auth'} className='text-red-600 ml-3 font-semibold'>
                  Login
                </Link>
               
                </p>
          </div>
         
      </div>
  )
}

export default Register