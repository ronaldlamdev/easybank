import React, { useState } from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { FaBars ,FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }


  return (
    <header className='fixed top-0 bg-white z-20 w-full h-[100px] shadow-md'>
      <nav className='mx-auto max-w-[1680px] h-full flex justify-between items-center px-20'>

        {/* Logo */}
        <div className=''>
          <Link to='/'>
            <img className='h-auto w-[120px]' src={Logo} />
          </Link>
        </div>

        {/* Menu */}
        <ul className='flex items-center h-full md:hidden'>
          <li className='px-5 text-[#9698a6] h-full flex items-center cursor-pointer relative hover:text-[#2d314d] duration-300 hover-anim'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-5 text-[#9698a6] flex items-center cursor-pointer h-full relative hover:text-[#2d314d] duration-300 hover-anim'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-5 text-[#9698a6] h-full flex items-center cursor-pointer relative hover:text-[#2d314d] duration-300 hover-anim'>
            <Scroll to="contact" smooth={true} duration={500}>
              Contact
            </Scroll>
          </li>
          <li className='px-5 text-[#9698a6] h-full flex items-center cursor-pointer relative hover:text-[#2d314d] duration-300 hover-anim'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='px-5 text-[#9698a6] h-full flex items-center cursor-pointer relative hover:text-[#2d314d] duration-300 hover-anim'>
            Careers
          </li>
        </ul>

        {/* Invite Button */}
        <button className='xl:hidden'>Request Invite</button>

        {/* Open and close menu button for mobile menu*/}
        {nav ? <FaTimes size={23} onClick={handleNav} className='md:flex hidden z-20 text-black'/> : <FaBars size={21} onClick={handleNav} className='md:flex hidden'/>}

        {/* Background color change for mobile menu */}
        <div className={nav ? 'md:absolute md:w-full md:h-screen md:top-0 md:left-0 md:bg-[#2d314d] md:opacity-30 md:z-[-1]' : 'hidden'}></div>

        {/* Mobile menu */}
        {nav ? <div className='hidden md:fixed md:flex md:flex-col md:top-36 md:mx-auto md:justify-center md:bg-white md:w-[400px] md:h-[300px] md:rounded-md md:items-center'>
          <Link className='text-[#2d314d] pb-4' to='/'>Home</Link>
          <Link className='text-[#2d314d] py-4' to='/about'>About</Link>
          <Scroll className='text-[#2d314d] py-4' to="contact" smooth={true} duration={500}>Contact</Scroll>
          <Link className='text-[#2d314d] py-4' to='/blog'>Blog</Link>
          <span className='text-[#2d314d] pt-4'>Careers</span>
        </div> : ''}

      </nav>
    </header>
      
  )
}

export default Navbar