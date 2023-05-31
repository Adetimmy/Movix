import Link from 'next/link'
import React from 'react'
import { year } from './date'
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex gap-6 items-center flex-col w-full my-12 font-display text-sm text-center sm:text-base foot'>
        <div className='flex justify-between md:w-1/5 text-xl w-1/2'>
            <Link href={'https://facebook.com/ogunle2'} target='_blank'><FaFacebookSquare/></Link>
            <Link href={''} target='_blank'><FaInstagram/></Link>
            <Link href={'https://twitter.com/Adetimmy_'} target='_blank'><FaTwitter/></Link>
            <Link href={'https://www.linkedin.com/in/ademola-ogunle-29a6191b6'}><FaLinkedin/></Link>
            <Link href={'https://github.com/Adetimmy'} target='_blank'><FaGithub/></Link>
        </div>

        <div className='font-bold flex justify-between md:w-1/3 w-full text-[#111827]'>
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