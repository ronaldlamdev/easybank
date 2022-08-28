import React from 'react';
import Currency from '../assets/image-currency.jpg';
import Restaurant from '../assets/image-restaurant.jpg';
import Plane from '../assets/image-plane.jpg';
import Confetti from '../assets/image-confetti.jpg';

const BlogPage = () => {
  return (
    <div className='w-full h-screen mx-auto px-20'>
      <h1>Latest Articles</h1>

      {/* Blogs Container */}
      <div>

        {/* 1st Blog */}
        <div>
          {/* Image container */}
          <div>
            <img src={Currency} />
          </div>
          <h6>By Claire Robinson</h6>
          <h4>
            Receive money in any currency
            with no fees.
          </h4>
          <p>
            The world is getting smaller and we're
            becoming more mobile. So why should be 
            forced to only receive money in a single...
          </p>
        </div>

        {/* 2nd Blog */}
        <div>
          {/* Image container */}
          <div>
            <img src={Restaurant} />
          </div>
          <h6>By Wilson Hutton</h6>
          <h4>
            Treat yourself without
            worrying about money
          </h4>
          <p>
            Our simple budgeting feature
            allows you to separate out your
            spending and set realistic limits
            each month. That means you...
          </p>
        </div>

        {/* 3rd Blog */}
        <div>
          {/* Image container */}
          <div>
            <img src={Plane} />
          </div>
          <h6>By Wilson Hutton</h6>
          <h4>
            Take your Easybank card wherever you go
          </h4>
          <p>
            We want you to enjoy your travels.
            This is why we don't charge any 
            fees on purchases while you're abroad.
            We'll even show you...
          </p>
        </div>

        {/* 4th Blog */}
        <div>
          {/* Image container */}
          <div>
            <img src={Confetti} />
          </div>
          <h6>By Claire Robinson</h6>
          <h4>
            Our invite-only Beta accounts are now live!
          </h4>
          <p>
            After a lot of hard work by the whole team,
            we're excited to launch our closed beta. It's
            easy to request an invite through the site...
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage