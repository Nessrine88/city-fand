import React from 'react'
import '../../app/globals.css'
const Liquidity = () => {
  return (
    <div>
        <div class="border border-[#E2E2E2] rounded-[12px] p-[2rem] bg-[url('/images/grid1.png')] bg-cover bg-center">
     <div className='flex items-center'>
        <img 
        src='/images/circleIcon.png'
        alt='circle'
        />
        <h3 className='text-[24px] font-semibold leading-[30px] tracking-[-0.24px] text-left pl-[20px] '>
        Liquidity
        </h3>
     </div>
     <p className='text-[16px] text-[#303030] font-normal leading-[24px] tracking-[-0.5px] text-left py-[1rem] px-[3rem]'>
        The Manager intends to offer investors liquidity events, through a redemption
program, beginning in 2025.
        </p>
        <a className=' underline text-[16px] font-semibold leading-[24px] text-center py-[1rem] px-[3rem] underline-offset-[5px]'>
            View More
        </a>
        </div>
        <div className='border-t-[1px] border-b-[1px] border-[#DDDDDD] my-[42px] '>
            <h2 className='text-20 font-semibold leading-28 tracking-tighter text-left py-[24px] '>Management Team</h2>
            <p class="text-base font-normal leading-[25.6px] text-left pb-[42px]">
              Homovest Manager, LLC, which is owned and managed by Nada is led by John Green, Mauricio Delgado, Sundance Brennan, Jeremy Males, and Justin Wang, with 50+ years of industry experience and management of $1B+ in assets.
            </p>
            <p class="text-base font-normal leading-[25.6px] text-left pb-[42px]">
              The Manager and the Cityfunds Series funds are uniquely well suited to be the source of underlying residential real estate investments because of their unprecedented ability to provide access to the $20+ trillion home equity sector of the residential real estate market. Home equity investment agreement assets are sourced through a targeted strategy, rigorous diligence processes, an experienced team, and a commitment to transparency with all stakeholders.
            </p>
            <p class="text-base font-normal leading-[25.6px] text-left pb-[42px]">
              Each of the Cityfunds Series funds creates a thematic, index-like exposure to a single city’s home equity market through diversified portfolios of home equity investment agreements. Cityfunds Series funds are able to unlock access to some of the most in-demand real estate markets by investing in owner-occupied homes through the home equity investment agreement asset type.
            </p>

        </div>
        <div>

          <h3> Upcoming Webinar</h3>
          <p>Join our free live webinars! Hosted by Cityfund’s leadership, we cover the real estate market, cityfund investing, relevant current events, new product launches, and more.</p>
        <div className='flex items-center'>
          <div>
            <img 
            src='/images/people.png'
            alt='webinar'
            />
          </div>
          <div>
            <h1>Cityfunds Live Q&A</h1>
            <div class="flex items-center justify-center h-screen bg-[url('/images/grid2.png')] bg-cover bg-center">
              <img 
              src='/images/calendar.png'
              alt='webinar'
              />
              <p>May 16, 2024 at 11:00 PM CST</p>
            </div>
            <button>Register Here</button>
          </div>
        </div>
        </div>

        <div className='w-[50%] '>
          <h4>

          </h4>
          <p className='flex justify-between '>
          Offering Memorandum
          <i class="fa fa-external-link" aria-hidden="true"></i>
          </p>
          <p className='flex justify-between '>
          Subscription Agreement
<i class="fa fa-external-link" aria-hidden="true"></i>
</p>
<p className='flex justify-between '>
Risk Factors
<i class="fa fa-external-link" aria-hidden="true"></i>
</p>
<p className='flex justify-between '>
Management
<i class="fa fa-external-link" aria-hidden="true"></i>
</p>
<p className='flex justify-between '>
Description of Business
<i class="fa fa-external-link" aria-hidden="true"></i>
</p>
        </div>
    </div>
  )
}

export default Liquidity
