import React from 'react';
import FooterLogo from '../assets/footer-logo.svg';
import {FaFacebookSquare, 
        FaYoutube, 
        FaTwitter, 
        FaPinterest,
        FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';


const Footer = () => {
  return (
    <footer name="contact" className='w-full h-[220px] bg-[#2d314d]'>
      <div className='max-w-[1680px] w-full h-full mx-auto px-20 py-10 flex justify-between'>
        
        {/* Left side */}
        <div className='left flex justify-between w-[700px] h-full'>

          {/* First column */}
          <div className='flex flex-col justify-around'>
            {/* Logo */}
            <div>
              <Link to='/'>
                <img src={FooterLogo}/>
              </Link>
            </div>

            {/* Social icons */}
            <div className='flex'>
              <FaFacebookSquare size={25} className='text-white mr-3 hover:text-[#31d35c] duration-300 cursor-pointer'/>
              <FaYoutube size={25} className='text-white mr-3 hover:text-[#31d35c] duration-300 cursor-pointer'/>
              <FaTwitter size={25} className='text-white mr-3 hover:text-[#31d35c] duration-300 cursor-pointer'/>
              <FaPinterest size={25} className='text-white mr-3 hover:text-[#31d35c] duration-300 cursor-pointer'/>
              <FaInstagram size={25} className='text-white hover:text-[#31d35c] duration-300 cursor-pointer'/>
            </div>

          </div>

          {/* Second column */}
          <div className='flex flex-col justify-evenly'>
            <Scroll className='text-white hover:text-[#31d35c] duration-300 cursor-pointer' to="contact" smooth={true} duration={500}>Contact</Scroll>
            <Link className='text-white hover:text-[#31d35c] duration-300' to='/about'>About Us</Link>
            <Link className='text-white hover:text-[#31d35c] duration-300' to='/blog'>Blog</Link>
          </div>

          {/* Third column */}
          <div className='flex flex-col justify-evenly'>
            <p className='text-white cursor-pointer hover:text-[#31d35c] duration-300' >Careers</p>
            <p className='text-white cursor-pointer hover:text-[#31d35c] duration-300' >Support</p>
            <p className='text-white cursor-pointer hover:text-[#31d35c] duration-300' >Privacy Policy</p>
          </div>

        </div>

        {/* Right side */}
        <div className='flex flex-col justify-around items-end'>
          <button className='w-[180px]'>Request Invite</button>
          <p className='text-[#9698a6]'>© Easybank. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer