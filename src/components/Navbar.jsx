import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { FaBars ,FaTimes} from 'react-icons/fa'

const Navbar = () => {
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
        <ul className='flex items-center h-full md:fixed md:top-4 md:bg-white md:h-[400px] md:mx-auto md:hidden'>
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
        <FaBars size={20} className="hidden"/>

      </nav>
    </header>
      
  )
}

export default Navbar