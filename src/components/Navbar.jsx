import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='w-full h-[100px]'>
      <nav className='max-w-[1440px] w-full h-full flex justify-between items-center mx-auto'>

        {/* Logo */}
        <div className='logo-container'>
          <Link to='/'>
            <img src={Logo} />
          </Link>
        </div>

        {/* Menu */}
        <ul className='flex'>
          <li className='px-5 text-[#9698a6] '>Home</li>
          <li className='px-5 text-[#9698a6] '>About</li>
          <li className='px-5 text-[#9698a6] '>Contact</li>
          <li className='px-5 text-[#9698a6] '>Blog</li>
          <li className='px-5 text-[#9698a6] '>Careers</li>
        </ul>

        {/* Invite Button */}
        <button>Request Invite</button>

      </nav>
    </header>
  )
}

export default Navbar