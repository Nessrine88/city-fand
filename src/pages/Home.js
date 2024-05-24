import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";

const Home = () => {
  return (
    <div>
    <i className="fas fa-arrow-left"></i>
      <p> Back to Listing</p>
      <h1>The Ocala Fund</h1>
      <div className='flex'>
      <div className='mr-4'>
        <img
        src= "/images/Overlay.png"
        alt='Overlay'
        />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <img
        src= "/images/img2.png"
        alt='Ocala Fund'
        />
         <img
        src= "/images/img3.png"
        alt='Ocala Fund'
        /> <img
        src= "/images/img4.png"
        alt='Ocala Fund'
        /> <img
        src= "/images/img5.png"
        alt='Ocala Fund'
        />
      </div>
      </div>

      <div className='grid grid-cols-2 gap-[5rem]'>
        <div className='w-[700px]'>
          <h3 className='mb-5'>What is a HomeVest Ocala Florida SFR fund?</h3>
          <p className=''>
          HomeVest Single Family Rental Fund is an innovative investment avenue that streamlines investing in rental properties, offering unparalleled convenience and accessibility, with investors achieving instant diversification across numerous properties and markets; the continuous addition of new homes ensures dynamic diversification and expansion over time.

Introducing the Homevest Single Family Residential Fund, an innovative avenue for seamless entry into the rental property market, streamlining the investment process and allowing portfolio diversification across multiple properties and markets; with ongoing growth and diversification, new homes will be consistently added over time.
          </p>
        </div>
        <div className='w-[300px] '>
          <h2 className='flex items-baseline'>Houston
            <img 
            className='h-[10px] pl-2'
            src= "/images/greenpoint.png"
            />
          </h2>
          <div className='flex'>
            <div>$10.00/ share</div>
            <div>2 assets</div>
          </div>
          <p>
            Own a piece of Houston's thriving future, where economic diversity, cultural richness, and strategic location converge, presenting unmatched investment opportunities.
          </p>
          <button>Invest</button>
        </div>
      </div>

    </div>
  )
}

export default Home
