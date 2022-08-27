import React from 'react'
import Banking from '../assets/icon-online.svg';
import Budgeting from '../assets/icon-budgeting.svg';
import Onboarding from '../assets/icon-onboarding.svg';
import API from '../assets/icon-api.svg';

const AboutPage = () => {
  return (
    <div className='w-full h-screen bg-[#f3f4f6]'>
      <div className='max-w-[1680px] h-full mx-auto px-8 flex flex-col justify-center'>

        {/* Upper About Text */}
        <div>

          <div>
            <h1>Why Choose Easybank?</h1>
            <p>
              We leverage Open Banking to turn your bank account
              into your financial hub. Control your finances like
              never before. 
            </p>
          </div>
          
        </div>

        {/* Lower About Text */}
        <div>

          {/* First column */}
          <div>
            <img src={Banking}/>
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow
              you to keep track of your finances wherever you 
              are in the world.
            </p>
          </div>

          {/* Second column */}
          <div>
            <img src={Budgeting}/>
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive 
              notifications when you're close to hitting your limits.
            </p>
          </div>

          {/* Third column */}
          <div>
            <img src={Onboarding}/>
            <h3>Fast Onboarding</h3>
            <p>
              We don't do branches. Open your account in minutes
              online and start taking control of your finances 
              right away. 
            </p>
          </div>

          {/* Open API */}
          <div>
            <img src={API}/>
            <h3>Open API</h3>
            <p>
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