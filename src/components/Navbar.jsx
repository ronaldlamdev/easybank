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
          <li className='px-5 text-[#9698a6] '>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-5 text-[#9698a6] '>
            <Link to='/'>About</Link>
          </li>
          <li className='px-5 text-[#9698a6] '>
            <Link to='/'>Contact</Link>
          </li>
          <li className='px-5 text-[#9698a6] '>
            <Link to='/'>Blog</Link>
          </li>
          <li className='px-5 text-[#9698a6] '>
            <Link to='/'>Careers</Link>
          </li>
        </ul>

        {/* Invite Button */}
        <button>Request Invite</button>

      </nav>
    </header>
  )
}

export default Navbar