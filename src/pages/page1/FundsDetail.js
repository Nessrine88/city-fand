import React from 'react'

const FundsDetail = () => {
  return (
    <div className='border-t-[1px] border-b-[1px] border-[#DDDDDD] my-[42px] py-[42px] '>
      <h3 className='class="font-plus-jakarta-sans text-[20px] font-semibold leading-[28px] tracking-[-0.01em] text-left"'>Fund Details</h3>
      <div className='w-[70%] grid grid-cols-3 my-5 '>
        <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
            Strategy
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>Growth</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Fund Status
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>Ramping Up</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Management Fee
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>1.5% per year</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Term
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p>Open-ended</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Dividends
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>Event-based</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Target Return
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>18.0% IRR</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Acquisition Fee
           <img className='ml-1 w-[20px] h-[20px]'src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>1.0%</p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
            
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '></p>
      </div>
      <div>
        <p className='flex text-[#989B9F] text-[14px] font-normal leading-[21px] tracking-[-0.5px] text-left'>
        Tax Form
           <img className='ml-1 w-[20px] h-[20px]' src='/images/exclamation.png' />
        </p>
        <p className='font-plus-jakarta-sans text-[20px] font-semibold leading-[26px] tracking-[-0.24px] text-left text-[#303030] pb-[26px] pt-[8px]  '>1099-DIV</p>
      </div>
      </div>
    </div>
  )
}

export default FundsDetail
