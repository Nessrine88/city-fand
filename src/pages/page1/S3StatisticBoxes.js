import React from 'react';
import '../../app/globals.css'

const StatisticBoxes = () => {
  return (
    <div className='mt-[139px] flex items-center w-full justify-between mb-[64px]'>
      <div className='flex items-center'>
        <div>
            <img 
              src="/images/population.png"
            />
        </div>
        <div className='ml-[24px]'>
            <p className='text-[14px] text-[#6A6A6A] leading-[20px] flex items-center Roboto'>
              Population
              <span>
                <img 
                  src='/images/Vector.png'
                  alt='exclamation point'
                />
              </span>
            </p>
            <p className='font-bold text-[16px]'>70,000</p>
        </div>
      </div>

      <div className='flex items-center'>
        <div>
            <img 
              src="/images/home.png"
            />
        </div>
        <div className='ml-[24px]'>
            <p className='text-[14px] text-[#6A6A6A] leading-[20px] flex items-center Roboto'>
              Average Monthly Rent
              <span>
                <img 
                  src='/images/Vector.png'
                  alt='exclamation point'
                />
              </span>
            </p>
            <p className='font-bold text-[16px]'>$1,166</p>
        </div>
      </div>


      <div className='flex items-center Roboto'>
        <div>
            <img 
              src="/images/homeprice.png"
            />
        </div>
        <div className='ml-[24px]'>
            <p className='text-[14px] text-[#6A6A6A] leading-[20px] flex items-center Roboto'>
              Average Home Price
            </p>
            <p className='font-bold text-[16px]'>$190,400</p>
        </div>
      </div>

      <div className='flex items-center Roboto'>
        <div>
            <img 
              src="/images/income.png"
            />
        </div>
        <div className='ml-[24px]'>
            <p className='text-[14px] text-[#6A6A6A] leading-[20px] flex items-center Roboto'>
              Average Income
            </p>
            <p className='font-bold text-[16px]'>$50,000</p>
        </div>
      </div>

      <div className='flex items-center Roboto'>
        <div>
            <img 
              src="/images/popgrowth.png"
            />
        </div>
        <div className='ml-[24px]'>
            <p className='text-[14px] text-[#6A6A6A] leading-[20px] flex items-center Roboto'>
              Population Growth
            </p>
            <p className='font-bold text-[16px]'>7.6%</p>
        </div>
      </div>
    </div>
  )
}

export default StatisticBoxes;
