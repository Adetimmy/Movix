'use client'
import { useStateContext } from '@/context/Provider';
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi'

const ThemeModifier = () => {
const { handleThemeChange, theme } = useStateContext()

  return (
    <div>
      <button onClick={handleThemeChange}>
        {theme === 'dark' &&   <div className='flex justify-center gap-4 items-center'>
        <FaMoon fontSize={23} />
        <p className='text-xl dark:text-slate-600'>Dark Theme</p>
          </div>}
        {theme === 'light' && <div className='flex justify-center gap-4 items-center'>
        <FaSun fontSize={23} />
        <p className='text-xl dark:text-slate-600'>Light Theme</p>
          </div>}
        {theme === 'system' && <div className='flex justify-center gap-4 items-center'>
        <HiDesktopComputer fontSize={23} />
        <p className='text-xl dark:text-slate-600'>System Default</p>
          </div>}
      </button>
    </div>
  );
};

export default ThemeModifier;
