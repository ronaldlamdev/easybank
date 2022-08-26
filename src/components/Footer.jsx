import React from 'react';
import FooterLogo from '../assets/footer-logo.svg';
import {FaFacebookSquare, 
        FaYoutube, 
        FaTwitter, 
        FaPinterest,
        FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='w-full h-[220px] bg-[#2d314d]'>
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
              <FaFacebookSquare size={25} className='text-white mr-3'/>
              <FaYoutube size={25} className='text-white mr-3'/>
              <FaTwitter size={25} className='text-white mr-3'/>
              <FaPinterest size={25} className='text-white mr-3'/>
              <FaInstagram size={25} className='text-white'/>
            </div>

          </div>

          {/* Second column */}
          <div className='flex flex-col justify-evenly'>
            <Link className='text-white' to='/contact'>Contact</Link>
            <Link className='text-white' to='/about'>About Us</Link>
            <Link className='text-white' to='/blog'>Blog</Link>
          </div>

          {/* Third column */}
          <div className='flex flex-col justify-evenly'>
            <p className='text-white cursor-pointer' >Careers</p>
            <p className='text-white cursor-pointer' >Support</p>
            <p className='text-white cursor-pointer' >Privacy Policy</p>
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