"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavBar2 = () => {

  const [isMenuOpen,setIsMenuOpen] = React.useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky z-[9999999999] bg-white text-blue-600 top-0 transition duration-500 w-full" id="navbar-container">
      <div className="relative flex items-center justify-center">
        <div className="container flex items-center justify-between py-2 lg:py-6">
          <Link href="/" className='flex items-center '>
            <Image src="/assets/logo.png" alt="logo" width={175} height={130} className='pl-4 w-[120] h-[60px] lg:w-[175px] lg:h-[120px]' />
          </Link>

          <Button onClick={handleMenuClick} className="cursor-pointer lg:hidden group  text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition duration-150">
            <Bars3Icon width={24} height={24} className=" w-[24px] group text-blue-600 bg-white group-hover:bg-blue-600 group-hover:text-white transition duration-150" />
          </Button>
          
          <ul className= {`${isMenuOpen ? "flex" : "hidden" } lg:flex absolute left-0 top-[75px] lg:top-[155px] outline lg:outline-none w-full flex-col gap-4 bg-white px-4 py-3 font-poppins font-medium lg:static lg:w-fit lg:flex-row lg:gap-12 lg:bg-transparent lg:px-0 lg:py-0`}>
            <Link href="/" className="group">
              <p>Anasayfa</p>
              <div className="ml-auto h-0.5 w-0 bg-blue-600 transition-[width] duration-150 group-hover:ml-0 group-hover:w-full"></div>
            </Link>
            <Link href="/hakkimizda" className="group">
              <p>Hakkımda</p>
              <div className="ml-auto h-0.5 w-0 bg-blue-600 transition-[width] duration-150 group-hover:ml-0 group-hover:w-full"></div>
            </Link>
            <Link href="/hizmetlerimiz" className="group">
              <p>Hizmetlerimiz</p>
              <div className="ml-auto h-0.5 w-0 bg-blue-600 transition-[width] duration-150 group-hover:ml-0 group-hover:w-full"></div>
            </Link>
            <Link href="/" className="group">
              <p>İletişim</p>
              <div className="ml-auto h-0.5 w-0 bg-blue-600 transition-[width] duration-150 group-hover:ml-0 group-hover:w-full"></div>
            </Link>
            <Link href="/" className={`group lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
              <p>Randevu Al</p>
              <div className="mt-[1px] ml-auto h-0.5 w-0 bg-blue-600 transition-[width] duration-150 group-hover:ml-0 group-hover:w-full"></div>
            </Link>
          </ul>

          <Button className="group relative hidden h-14 w-36 overflow-hidden rounded border-2 border-blue-600 text-blue-600 bg-transparent px-7 py-3 transition duration-300 hover:text-white lg:block">
            <Link href="/randevu" className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto inline-flex items-center justify-center">Randevu Al</Link>
            <div className="absolute left-0 top-0 z-0 h-full w-0 rounded-r-full bg-blue-600 transition-[width] duration-300 group-hover:w-44"></div>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar2