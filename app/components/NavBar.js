'use client'
import React from 'react'
import { useState } from 'react'

import Link from 'next/link'
export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='sticky top-0 z-10'>
    
    <nav className='bg-black '>
      <div className='max-w-7xl px-4 2xl:px-0 text-white flex w-full justify-between mx-auto py-4'>
      <section className='text-green-500 tracking-tighter font-bold'>
         GGC
      </section>
      <section>
        <ul className='hidden md:block  space-x-8 font-bold'>
          <Link className='hover:text-green-500 transition-colors duration-200    ' href={'/'}>Home</Link>
          <Link className='hover:text-green-500 transition-colors duration-200 'href={'/'}>Blog</Link>
          <Link className='hover:text-green-500 transition-colors duration-200 ' href={'/'}>Login</Link>
          <Link className='hover:text-green-500 transition-colors duration-200 ' href={'/'}>Sign Up</Link>
        </ul>
        <div onClick={() => {setOpen(!open)}} className='md:hidden'>
        <img  src='/f.svg'>
        
        </img>
        </div>

  
      
      </section>
      </div>
    


    </nav>
    {
          open && (
            <section className='bg-black md:hidden'>
            <ul className='flex flex-col gap-4 pl-4 text-3xl py-4 font-bold'>
                <li>Home</li>
                <li>Blog</li>
                <li>Login</li>
                <li>Sign up</li>

            </ul>
        </section>
          )
        }
    </div>
  
  )
}
