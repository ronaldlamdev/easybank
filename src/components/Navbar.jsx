import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>

        {/* Logo */}
        <div className='logo-container'>
          <Link to='/'>
            <img src={Logo} />
          </Link>
        </div>

        {/* Menu */}
        <ul className='menu'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

        {/* Invite Button */}
        <button>Request Invite</button>

      </nav>
    </header>
  )
}

export default Navbar