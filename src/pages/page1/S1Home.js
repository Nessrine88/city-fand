import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../../app/globals.css'

const Home = () => {
  return (
    <div className='pt-[61.5px]' >
      <div className='flex items-center p-1'>
        <div className='p-1'>
       
       
       
        </div>
        <div className='p-1'>
        <p className='text-[#1B4965] text-[15px] '> Back to Listing</p>
        </div>
      </div>
      <h1 className='font-[600]  text-[36px] leading-[40px] text-[#020817] m-2 mb-[32px] '>The Ocala Fund</h1>
      <div className='flex'>
      <div className='mr-4'>
        <img
        className='w-full h-full object-fill'
        src= "/images/Overlay.png"
        alt='Overlay'
        />
      </div>
      <div className='grid grid-cols-2 gap-4 '>
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

      <div className='flex items-center  pt-[3rem] '>
        <div className='w-[50vw] mr-32'>
          <h3 className='mb-5 text-[20px] font-[600]'>What is a HomeVest Ocala Florida SFR fund?</h3>
          <p className='font-[400] text-1rem leading-[25.6px] text-[#020817] '>
          HomeVest Single Family Rental Fund is an innovative investment avenue that streamlines investing in rental properties, offering unparalleled convenience and accessibility, with investors achieving instant diversification across numerous properties and markets; the continuous addition of new homes ensures dynamic diversification and expansion over time.

Introducing the Homevest Single Family Residential Fund, an innovative avenue for seamless entry into the rental property market, streamlining the investment process and allowing portfolio diversification across multiple properties and markets; with ongoing growth and diversification, new homes will be consistently added over time.
          </p>
        </div>
        <div className='w-[300px] '>
          <h2 className='flex items-baseline font-bold text-2xl leading-tight mb-'>Houston
            <img 
            className='h-[10px] pl-2'
            src= "/images/greenpoint.png"
            />
          </h2>
          <div className='flex items-center'>
            <div className='bg-[#E7EAED] h-9 rounded-[6.21px] gap-x-1 flex items-center mr-5 px-2'>$10.00/ share</div>
            <div className='bg-[#E7EAED] h-9 rounded-[6.21px] flex items-center px-2'>2 assets</div>
          </div>
          <p className='mt-[24px] text-[#888888] font-sans font-normal text-base leading-6 tracking-tighter text-left'>
            Own a piece of Houston's thriving future, where economic diversity, cultural richness, and strategic location converge, presenting unmatched investment opportunities.
          </p>
          <button className='w-full py-2 bg-[#1C4966] rounded-[40px] text-[#FFFFFF] text-1rem my-[2rem]'>Invest</button>
        </div>
      </div>

    </div>
  )
}

export default Home
