import React from 'react'

const Map = () => {
  return (
    <div>
            <div className='mt-5'>
        <img 
         src='/images/map.png'
        />
      </div>
      <div className='flex items-center w-[70%] justify-between py-[42px]  '>
        <div>
        <p className='text-[14px] text-[#989B9F]'>
        Population Rank
        </p>
        <p className='text-[24px] font-bold'>
            14th
        </p>
      </div>
      <div>
        <p className='text-[14px] text-[#989B9F]'>
        Population Rank
        </p>
        <p className='text-[24px] font-bold'>
            12th
        </p>
      </div>
      <div>
        <p className='text-[14px] text-[#989B9F]'>
        Population Rank
        </p>
        <p className='text-[24px] font-bold'>
            74.6%
        </p>
      </div>
      </div>

      <div className='w-[50%] border border-[#1C4966] rounded-[20px] px-[24px] py-[20px] '>
        <h3 className='font-[600] text-[20px] leading-[25px] py-[33px] text-[#111111] '>
        How much can you expect to make?
        </h3>
        <div className='flex justify-between items-center'>
            <div className='py-[14px]  text-[20px] text-[#6A6A6A] '>Initial Investment</div>
            <div className='text-[#6A6A6A]'>$ 50, 000</div>

        </div>
        <div>
            <img 
             src='/images/line1.png'
            />
        </div>

        <div className='flex justify-between items-center'>
            <div className='py-[14px]  text-[20px] text-[#6A6A6A] '>Property value growth ( 5 year ) </div>
            <div className='text-[#6A6A6A]'>30%</div>

        </div>
        <div>
            <img 
             src='/images/line2.png'
            />
        </div>

        <div className='flex justify-between items-center'>
            <div className='py-[14px]  text-[20px] text-[#6A6A6A] '>Initial Investment</div>
            <div className='text-[#6A6A6A]'>10%</div>

        </div>
        <div>
            <img 
             src='/images/line3.png'
            />
        </div>
        <div className='flex justify-between items-center'>
            <div className='py-[14px]  text-[20px] text-[#6A6A6A] '>Expected Return on investment </div>
            <div className='text-[#6A6A6A]'>$00.00</div>

        </div>
        <div className='flex justify-center mt-[14px] mb-[40px] font-[600] text-[15px] w-full h-[60px] items-center bg-[#EBEEF7] rounded-[16px] '>
        $00.00
        </div>
        <p className='text-black opacity-[80%] '>
        All projected values are before any property costs and platform fees. and based on a 5-year holding period. We expect the asset value to grow 30% over the next 5 years.
        </p>
      </div>
    </div>
  )
}

export default Map
