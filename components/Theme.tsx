'use client'
import { useStateContext } from '@/context/Provider';
import React, { useState, useEffect } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun, FaMoon } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi'
import { RiSunLine } from 'react-icons/ri';

const ThemeModifier = () => {
const { handleThemeChange, theme } = useStateContext()
  return (
    <div className='fixed z-50 bottom-2 right-3 bg-slate-700 dark:bg-slate-100 rounded-xl p-2'>
      <button onClick={handleThemeChange}>
        {theme === 'dark' &&   <div className='flex justify-center gap-2 items-center'>
        <BsMoonStarsFill fontSize={18} />
        <p className='text-sm dark:text-slate-600'>Dark Theme</p>
          </div>}
        {theme === 'light' && <div className='flex justify-center gap-2 items-center'>
        <RiSunLine fontSize={18} className='text-white'/>
        <p className='text-sm dark:text-slate-600 text-gray-200'>Light Theme</p>
          </div>}
        {theme === 'system' && <div className='flex justify-center gap-2 items-center'>
        <HiDesktopComputer fontSize={18}  className='text-gray-200 '/>
        <p className='text-sm dark:text-slate-600 text-gray-200'>System Default</p>
          </div>}
      </button>
    </div>
  );
};

export default ThemeModifier;
