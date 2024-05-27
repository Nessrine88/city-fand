import React from 'react'
import '../../app/globals.css'

const Liquidity = () => {
  return (
    <div>
      <div className="border border-[#E2E2E2] rounded-[12px] p-[2rem] bg-[url('/images/grid1.png')] bg-cover bg-center">
        <div className="flex items-center">
          <img 
            src='/images/circleIcon.png'
            alt='circle'
          />
          <h3 className="text-[24px] font-semibold leading-[30px] tracking-[-0.24px] text-left pl-[20px]">
            Liquidity
          </h3>
        </div>
        <p className="text-[16px] text-[#303030] font-normal leading-[24px] tracking-[-0.5px] text-left py-[1rem] px-[3rem]">
          The Manager intends to offer investors liquidity events, through a redemption
          program, beginning in 2025.
        </p>
        <a className="underline text-[16px] font-semibold leading-[24px] text-center py-[1rem] px-[3rem] decoration-[#797C6E33] underline-offset-[5px]">
          View More
        </a>
      </div>
      
      <div className="border-t-[1px] border-b-[1px] border-[#DDDDDD] my-[42px]">
        <h2 className="text-[20px] font-semibold leading-[28px] tracking-tight text-left pt-[42px]">Management Team</h2>
        <p className="text-[16px] text-[#303030] font-normal leading-[24px] tracking-[-0.5px] text-left pt-[24px] pb-[42px]">
          Homovest Manager, LLC, which is owned and managed by Nada is led by John Green, Mauricio Delgado, Sundance Brennan, Jeremy Males, and Justin Wang, with 50+ years of industry experience and management of $1B+ in assets. <br /><br />
          The Manager and the Cityfunds Series funds are uniquely well suited to be the source of underlying residential real estate investments because of their unprecedented ability to provide access to the $20+ trillion home equity sector of the residential real estate market. Home equity investment agreement assets are sourced through a targeted strategy, rigorous diligence processes, an experienced team, and a commitment to transparency with all stakeholders. <br /><br />
          Each of the Cityfunds Series funds creates a thematic, index-like exposure to a single city’s home equity market through diversified portfolios of home equity investment agreements. Cityfunds Series funds are able to unlock access to some of the most in-demand real estate markets by investing in owner-occupied homes through the home equity investment agreement asset type.
        </p>
      </div>
      
      <div>
        <h3 className="text-[20px] font-semibold leading-[28px] tracking-tight text-left pb-[24px]">Upcoming Webinar</h3>
        <p className="text-[16px] text-[#303030] font-normal leading-[24px] tracking-[-0.5px] text-left w-[50vw] border-b-[1px] border-[#DDDDDD] pb-[24px]">
          Join our free live webinars! Hosted by Cityfund’s leadership, we cover the real estate market, cityfund investing, relevant current events, new product launches, and more.
        </p>
        
        <div className="bg-[url('/images/grid2.png')] bg-bottom bg-no-repeat flex items-center mt-[42px] pt-[42px] pb-[42px] border border-[#E2E2E2] rounded-[24px] w-[50vw]">
          <div className="pl-5 ">
            <img 
              className="w-full h-full rounded-[14px]"
              src='/images/people.png'
              alt='webinar'
            />
          </div>
          <div className="pl-5">
            <h1 className="text-[24px] font-bold leading-[30px] tracking-[-0.24px]">Cityfunds Live Q&A</h1>
            <div className="flex items-center justify-center pt-4 pb-[32px]">
              <img 
                src='/images/calendar.png'
                alt='calendar'
              />
              <div>
                <p className="font-poppins text-sm font-normal leading-[21px] text-left text-[#686B6F]">May 16, 2024 at 11:00 PM CST</p>
              </div>
            </div>
            <button className="w-full py-[10px] px-[22px] gap-[10px] rounded-tl-[40px] text-white rounded-[40px] bg-[#1C4966]">
              Register Here
            </button>
          </div>
        </div>
      </div>

      <div className="w-[50vw] mt-[42px] border border-[#DDDDDD] border-b-[1px] py-[42px] ">
        <h4 className='text-[20px] font-bold leading-[28px] tracking-[-0.01em] '>Related Documents</h4>
        <p className="flex justify-between text-[20px] font-semibold leading-[25.2px] my-[12px] p-[12px] text-[#23282B] ">
          Offering Memorandum
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </p>
        <p className="flex justify-between text-[20px] font-semibold leading-[25.2px]  my-[12px] p-[12px]">
          Subscription Agreement
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </p>
        <p className="flex justify-between text-[20px] font-semibold leading-[25.2px] my-[12px] p-[12px]">
          Risk Factors
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </p>
        <p className="flex justify-between text-[20px] font-semibold leading-[25.2px] my-[12px] p-[12px]">
          Management
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </p>
        <p className="flex justify-between text-[20px] font-semibold leading-[25.2px] my-[12px] p-[12px] ">
          Description of Business
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </p>
      </div>
    </div>
  )
}

export default Liquidity
