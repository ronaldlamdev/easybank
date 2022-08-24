import React from 'react'
import HomeImg from '../assets/image-mockups.png';

const Homepage = () => {
  return (
    <div className='bg-[#fafafa] w-full h-[70vh]'>

      <div className='home-grid max-w-[1440px] grid grid-cols-2 mx-auto'>
        {/* Home text */}
        <div className='home-info'>

          <div className='text-6xl text-[#2d314d] pt-52'>
            <h1>Next generation</h1>
            <h1>digital banking</h1>
          </div>

          <p className='text-[#9698a6] text-xl py-12 pr-48'>
            Take your financial life online. Your Easybank account
            will be a one-stop-shop for spending, saving, budgeting,
            investing, and much more.
          </p>

          <button className='w-[180px]'>Request Invite</button>

        </div>

        {/* Home image */}
        <div className='bg-desktop'>
          <img className='absolute right-1' src={HomeImg}/>
        </div>
        

      </div>

    </div>
  )
}

export default Homepage