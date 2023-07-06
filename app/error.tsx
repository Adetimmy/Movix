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
            <div className='bg-white z-50 flex justify-center items-center min-h-screen' >
                 <h1 className='text-3xl'>sommething went wrong </h1>
                 <button onClick={() => reset()}>Try again</button>
            </div>
       
  )
}

export default Error   