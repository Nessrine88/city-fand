import React from 'react';

const Measure = () => {
  return (
    <div>
      <div className='flex items-center pt-[100px] justify-between w-[100vw] '>
        <div className='w-[45%] border border-dashed border-[#DEE2D6] p-5 mr-3 rounded-[12px]'>
          <img src='/images/Vector1.png' alt='Vector'/>
          <p className='font-semibold text-[1rem] pt-[30px] pb-[22px]'>
            Texas Dominates Business Attraction, Houston Remains a Top Leader
          </p>
          <div className='font-normal text-[14px] flex items-center'>
            <p>
            Greater Houston Partnership
            </p>
            <div className='ml-3 text-[10px] '>
              <i className="fas fa-chevron-right flex items-center mr-2 text-[#98A2B3]" ></i>
            </div>
          </div>
        </div>
        <div className='w-[45%] border border-dashed border-[#DEE2D6] mr-3 p-5 rounded-[12px]'>
          <img src='/images/Vector2.png' alt='Vector'/>
          <p className='font-semibold text-[1rem] pt-[30px] pb-[22px]'>
          Huston poison to hit this major population milestone in 5 years, New report says
          </p>
          <div className='font-normal text-[14px] flex items-center'>
            <p>
            Culture map houston
            </p>
            <div className='ml-3 text-[10px] '>
              <i className="fas fa-chevron-right flex items-center mr-2 text-[#98A2B3]" ></i>
            </div>
          </div>
        </div>
        <div className='w-[45%]  border border-dashed border-[#DEE2D6] mr-3 p-5 rounded-[12px]'>
          <img src='/images/Vector3.png' alt='Vector'/>
          <p className='font-semibold text-[1rem] pt-[30px] pb-[22px]'>
          Houston expected to be No. 2 most populous U.S. city by 2100
          </p>
          <div className='font-normal text-[14px] flex items-center'>
            <p>
            Chron
            </p>
            <div className='ml-3 text-[10px] '>
              <i className="fas fa-chevron-right flex items-center mr-2 text-[#98A2B3]" ></i>
            </div>
          </div>
        </div>
        <div className='w-[45%]  border border-dashed border-[#DEE2D6] p-5 rounded-[12px]'>
          <img src='/images/Vector4.png' alt='Vector'/>
          <p className='font-semibold text-[1rem] pt-[30px] pb-[22px]'>
             New developments and innovation Driving growth in bay area Houston
          </p>
          <div className='font-normal text-[14px] flex items-center'>
            <p>
            Greater houston partnership
            </p>
            <div className='ml-3 text-[10px] '>
              <i className="fas fa-chevron-right flex items-center mr-2 text-[#98A2B3]" ></i>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-[50px] '>
        <i className="fas fa-arrow-left mr-2 text-gray-500"></i>
        <i className="fas fa-arrow-right ml-2 text-black"></i>
      </div>
    </div>
  );
}

export default Measure;
