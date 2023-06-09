import Link from 'next/link'
import React from 'react'
import { year } from './date'
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex gap-6 items-center flex-col w-full my-12 font-display text-sm text-center sm:text-base foot '>
        <div className='flex justify-between md:w-1/6 text-xl w-1/3'>
            <Link href={'https://twitter.com/Adetimmy_'} target='_blank'><FaTwitter className='dark:dark:text-gray-300'/></Link>
            <Link href={'https://www.linkedin.com/in/ademola-ogunle-29a6191b6'}><FaLinkedin className='dark:dark:text-gray-300'/></Link>
            <Link href={'https://github.com/Adetimmy'} target='_blank'><FaGithub className='dark:dark:text-gray-300'/></Link>
        </div>

        <div className='font-bold flex justify-between md:w-1/3 w-full text-[#111827] dark:text-gray-300'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>

        <div className='text-[#6B7280] font-bold '>
            <p>&copy; {year} Movix</p>
        </div>
    </div>
  )
}

export default Footer