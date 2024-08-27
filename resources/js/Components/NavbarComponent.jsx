import React, { useEffect, useState } from 'react'
import LogoHimasisfo from '../../../public/Assets/LogoHimasisfo.svg'
import { navLinks } from '../../../public/Assets/asset.js'
import {Link} from '@inertiajs/react'



const NavbarComponent = () => {
  const [scroll, setScroll] = useState(true)
  const [lastScroll, setLastScrollY] = useState(0)

  useEffect(() => {
    let timeout

    const handleScroll = () => {
      if (window.scrollY === 0){
        setScroll(true)
        clearTimeout(timeout);
      }
      else{
        setScroll(window.scrollY <= lastScroll);
        clearTimeout(timeout)
        timeout = setTimeout(()=> setScroll(false), 1500);
      }
      setLastScrollY(window.scrollY);
    }
    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
      clearTimeout(timeout)
    }
  },[lastScroll]);

  return (
    <header className={`fixed w-full mt-[66px] font-inter z-50 ${scroll? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <div className="h-[75px] max-w-[1114px] mx-auto flex flex-row justify-between items-center">
        <div>
          <img src={LogoHimasisfo} alt="" className='w-[66px] h-[75px]' />
        </div>
        <div className='bg-darkFigma border border-borderColor py-2 px-3 rounded-lg flex items-center w-[744px] h-[46px]'>
          <ul className='flex items-center justify-between w-[720px] h-[30px] text-textColor px-[12px]'>
            {navLinks.map((link) => (
              <li className='px-2 text-[18px] rounded-lg capitalize' key={link.id}>
               <Link href={link.path}>{link.text}</Link> 
              </li>

            ))}
           
          </ul>
        </div>  
      </div>
    </header>
  )
}

export default NavbarComponent
