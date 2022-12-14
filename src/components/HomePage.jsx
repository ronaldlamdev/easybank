import React from 'react'
import HomeImg from '../assets/image-mockups.png';

const HomePage = () => {
  return (
    <div className='bg-[#fafafa] w-full h-fit'>

      {/* Grid container */}
      <div className='home-grid grid grid-cols-2 lg:flex lg:flex-col-reverse'>
        
        {/* Home text */}
        <div className='home-info flex flex-col justify-center max-w-[650px] w-full mx-auto px-8 lg:text-center lg:items-center lg:py-8'>

          <div className='text-6xl text-[#2d314d] lg:text-5xl'>
            <h1>Next generation</h1>
            <h1>digital banking</h1>
          </div>

          <p className='text-[#9698a6] text-lg py-12'>
            Take your financial life online. Your Easybank account
            will be a one-stop-shop for spending, saving, budgeting,
            investing, and much more.
          </p>

          <button className='w-[180px]'>Request Invite</button>

        </div>

        {/* Home image */}

        <div className='right relative z-10'>
          <img className='w-full' src={HomeImg}/>
        </div>
        

      </div>

    </div>
  )
}

export default HomePage