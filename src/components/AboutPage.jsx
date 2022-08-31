import React from 'react'
import Banking from '../assets/icon-online.svg';
import Budgeting from '../assets/icon-budgeting.svg';
import Onboarding from '../assets/icon-onboarding.svg';
import API from '../assets/icon-api.svg';

const AboutPage = () => {
  return (
    <div className='w-full h-screen md:h-fit bg-[#f3f4f6]'>
      <div className='max-w-[1680px] h-full mx-auto px-20 flex flex-col justify-center md:items-center gap-12 lg:gap-0'>

        {/* Upper About Text */}
        <div className='max-w-[50%] md:max-w-[100%] md:flex md:flex-col md:items-center md:text-center lg:pt-32'>
          <h1 className='text-[#2d314d] text-[2.75rem] md:text-[2rem]'>Why Choose Easybank?</h1>
          <p className='text-[#9698a6] text-xl md:text-lg my-8'>
            We leverage Open Banking to turn your bank account
            into your financial hub. Control your finances like
            never before. 
          </p>       
        </div>

        {/* Lower About Text */}
        <div className='flex justify-between gap-4 md:flex-col md:items-center md:py-12'>

          {/* First column */}
          <div className='md:flex md:flex-col md:items-center md:text-center'>
            <img src={Banking}/>
            <h3 className='text-[#2d314d] text-2xl my-8 md:text-'>Online Banking</h3>
            <p className='text-[#9698a6] text-[1.1rem]'>
              Our modern web and mobile applications allow
              you to keep track of your finances wherever you 
              are in the world.
            </p>
          </div>

          {/* Second column */}
          <div className='md:flex md:flex-col md:items-center md:text-center'>
            <img src={Budgeting}/>
            <h3 className='text-[#2d314d] text-2xl my-8'>Simple Budgeting</h3>
            <p className='text-[#9698a6] text-[1.1rem]'>
              See exactly where your money goes each month. Receive 
              notifications when you're close to hitting your limits.
            </p>
          </div>

          {/* Third column */}
          <div className='md:flex md:flex-col md:items-center md:text-center'>
            <img src={Onboarding}/>
            <h3 className='text-[#2d314d] text-2xl my-8'>Fast Onboarding</h3>
            <p className='text-[#9698a6] text-[1.1rem]'>
              We don't do branches. Open your account in minutes
              online and start taking control of your finances 
              right away. 
            </p>
          </div>

          {/* Fourth column*/}
          <div className='md:flex md:flex-col md:items-center md:text-center'>
            <img src={API}/>
            <h3 className='text-[#2d314d] text-2xl my-8'>Open API</h3>
            <p className='text-[#9698a6] text-[1.1rem]'>
              Manage your savings, investments, pension, and
              much more from one account. Tracking your money 
              has never been easier. 
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage