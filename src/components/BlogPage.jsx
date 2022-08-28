import React from 'react';
import Currency from '../assets/image-currency.jpg';
import Restaurant from '../assets/image-restaurant.jpg';
import Plane from '../assets/image-plane.jpg';
import Confetti from '../assets/image-confetti.jpg';

const BlogPage = () => {
  return (
    <div className='w-full h-screen bg-[#fafafa]'>
      <div className='w-full h-full mx-auto px-20 max-w-[1680px] flex flex-col justify-center gap-12'>
        <h1 className='text-[#2d314d] text-4xl'>Latest Articles</h1>

        {/* Blogs Container */}
        <div className='flex justify-between gap-8'>

          {/* 1st Blog */}
          <div className='bg-white rounded-b-lg shadow-sm'>
            {/* Image container */}
            <div>
              <img className='rounded-t-lg h-[250px] w-full' src={Currency} />
            </div>
            {/* Text container */}
            <div className='p-8 flex flex-col justify-evenly'>
              <h6 className='text-[#9698a6]'>By Claire Robinson</h6>
              <h4 className='my-4 text-[#2d314d] text-xl'>
                Receive money in any currency
                with no fees.
              </h4>
              <p className='text-[#9698a6]'>
                The world is getting smaller and we're
                becoming more mobile. So why should be 
                forced to only receive money in a single...
              </p>
            </div>
            
          </div>

          {/* 2nd Blog */}
          <div className='bg-white rounded-b-lg shadow-sm'>
            {/* Image container */}
            <div>
              <img className='rounded-t-lg h-[250px] w-full' src={Restaurant} />
            </div>
            {/* Text container */}
            <div className='p-8 flex flex-col justify-evenly'>
              <h6 className='text-[#9698a6]'>By Wilson Hutton</h6>
              <h4 className='my-4 text-[#2d314d] text-xl'>
                Treat yourself without
                worrying about money
              </h4>
              <p className='text-[#9698a6]'>
                Our simple budgeting feature
                allows you to separate out your
                spending and set realistic limits
                each month. That means you...
              </p>
            </div>
            
          </div>

          {/* 3rd Blog */}
          <div className='bg-white rounded-b-lg shadow-sm'>
            {/* Image container */}
            <div>
              <img className='rounded-t-lg h-[250px] w-full' src={Plane} />
            </div>
            {/* Text container */}
            <div className='p-8 flex flex-col justify-evenly'>
              <h6 className='text-[#9698a6]'>By Wilson Hutton</h6>
              <h4 className='my-4 text-[#2d314d] text-xl'>
                Take your Easybank card wherever you go
              </h4>
              <p className='text-[#9698a6]'>
                We want you to enjoy your travels.
                This is why we don't charge any 
                fees on purchases while you're abroad.
                We'll even show you...
              </p>
            </div>
          </div>

          {/* 4th Blog */}
          <div className='bg-white rounded-b-lg shadow-sm'>
            {/* Image container */}
            <div>
              <img className='rounded-t-lg h-[250px] w-full' src={Confetti} />
            </div>
            {/* Text container */}
            <div className='p-8 flex flex-col justify-evenly'>
              <h6 className='text-[#9698a6]'>By Claire Robinson</h6>
              <h4 className='my-4 text-[#2d314d] text-xl'>
                Our invite-only Beta accounts are now live!
              </h4>
              <p className='text-[#9698a6]'>
                After a lot of hard work by the whole team,
                we're excited to launch our closed beta. It's
                easy to request an invite through the site...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage