'use client'
import { useEffect } from 'react'

interface e{
    reset:() => void
    error:Error
}

const Error = ({reset, error}:e) => {
    useEffect(
        () => {
            console.error(error)   
        },
    [error])
  return (
            <div className='bg-white z-50 flex justify-center items-center min-h-screen flex-col gap-2' >
                 <h1 className='text-3xl'>Something went wrong! </h1>
                 <p>{error.message}</p>
                 
                 <button onClick={() => reset()} className='bg-gray-500 rounded-md py-1.5 px-2.5 text-gray-300'>Try again</button>
            </div>
       
  )
}

export default Error   