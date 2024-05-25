import React from 'react'

const Map = () => {
  return (
    <div>
            <div className='mt-5'>
        <img 
         src='/images/map.png'
        />
      </div>
      <div className='flex items-center w-[50%] justify-between p-5  '>
        <div>
        <p>
        Population Rank
        </p>
        <p className='text-[24px] font-bold'>
            14th
        </p>
      </div>
      <div>
        <p>
        Population Rank
        </p>
        <p className='text-[24px] font-bold'>
            12th
        </p>
      </div>
      <div>
        <p>
        Population Rank
        </p>
        <p className='text-[24px] font-bold'>
            74.6%
        </p>
      </div>
      </div>

      <div className='w-[50%] border border-[#1C4966] rounded-[20px] px-[24px] py-[20px] '>
        <h3>
        How much can you expect to make?
        </h3>
        <div className='flex justify-between items-center'>
            <div>Initial Investment</div>
            <div>$ 50, 000</div>

        </div>
        <div>
            <img 
             src='/images/line1.png'
            />
        </div>

        <div className='flex justify-between items-center'>
            <div>Property value growth ( 5 year ) </div>
            <div>30%</div>

        </div>
        <div>
            <img 
             src='/images/line2.png'
            />
        </div>

        <div className='flex justify-between items-center'>
            <div>Initial Investment</div>
            <div>10%</div>

        </div>
        <div>
            <img 
             src='/images/line3.png'
            />
        </div>
        <div className='flex justify-between items-center'>
            <div>Expected Return on investment </div>
            <div>$00.00</div>

        </div>
        <div className='flex justify-center'>
        $00.00
        </div>
        <p>
        All projected values are before any property costs and platform fees. and based on a 5-year holding period. We expect the asset value to grow 30% over the next 5 years.
        </p>
      </div>
    </div>
  )
}

export default Map
