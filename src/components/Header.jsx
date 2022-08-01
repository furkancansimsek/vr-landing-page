import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
    const links = "p-3 font-bold text-xl hover:text-[#CD0078] duration-300";
  return (
    <div className="header absolute w-full">
        <div className='container mx-auto flex justify-between w-full h-[12rem]'>
            <div className="nav-logo w-full h-full p-10">
                <img className='max-w-full max-h-full' src={logo} alt="LOGO" />
            </div>
            <ul className='hidden md:flex justify-center items-center h-full text-white'>
                <li><a className={links} href="#">Home</a></li>
                <li><a className={links} href="#">Info</a></li>
                <li><a className={links} href="#">Galery</a></li>
                <li><a className={links} href="#">Contact</a></li>
                <li><a className={links} href="#">FAQ</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
