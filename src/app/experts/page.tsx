import Image from 'next/image'
import React from 'react'

import e1 from './../../../public/e1.jpg'
import e2 from './../../../public/e2.jpg'
import e3 from './../../../public/e3.jpg'


export default function Experts() {
  return (
    <div className='w-full w-[350] text-black md:ml-15 m-auto md:mr-10  mt-44 '>


<h1 className=' mb-4 font-bold text-3xl'>Looking For Experts?</h1>
<h2 className='text-xl'>Are you looking for skilled web professionals to elevate your online presence? Look no further! We connect businesses with a
   talented pool of web experts ready to take on your projects.
   All our experts are vetted and have a proven track record in their respective fields, ensuring you get the best talent for your needs.</h2>
   <h1 className='mb-3 mt-3 font-bold text-2xl'>Why Choose Us?</h1>
    <h2  className='text-xl'>Our user-friendly platform allows you to browse profiles, view portfolios, and connect directly with experts.</h2>

    <div  className=' w-90 flex flex-col md:flex-row mt-10 mb-10'>


         <div className='w-[350px] h-[480px] border-2 border-gray-400 rounded-md ml-5 mr-auto  mt-10
         shadow-none transition-transform duration-300 cursor-pointer hover:shadow-2xl hover:shadow-teal-700'>
       <Image src={e3} alt="" width={500} height={500} className='w-[400px] h-[280px] '></Image>
        <div className='w-[348px] h-[196px] bg-teal-800 text-white'>
         <h1 className='text-lg font-semibold ml-2'>Martin Anderson</h1>
         <h2 className='ml-2'><b>Web Developer</b></h2>
         <p className='p-2'>Proficiency in both front-end and back-end development to build seamless applications 
          that enhance user engagement and drive conversions</p>
        </div>
       </div>

       <div className='w-[350px] h-[480px] border-2 border-gray-400 rounded ml-5 mr-auto mt-10
         shadow-none transition-transform duration-300 cursor-pointer hover:shadow-2xl hover:shadow-teal-700'>
       <Image src={e2} alt="" width={500} height={500} className='w-[400px] h-[280px] '></Image>
        <div className='w-[348px] h-[196px] bg-teal-800 text-white '>
        <h1 className='text-lg font-semibold ml-2'>Semanta Klores</h1>
        <h2 className='ml-2'><b>Web Designer</b></h2>
         <p className='p-2'>My expertise in Adobe Creative Suite allows me to deliver innovative solutions across both digital
           and print media, ensuring that every project aligns with the client’s vision and goals.</p>
        </div>
       </div>

       <div className='w-[350px] h-[480px] border-2 border-gray-400 rounded ml-5 mr-auto mt-10
         shadow-none transition-transform duration-300 cursor-pointer hover:shadow-2xl hover:shadow-teal-700'>
       <Image src={e1} alt="" width={500} height={500} className='w-[400px] h-[280px] '></Image>
        <div className='w-[348px] h-[196px] bg-teal-800 text-white p-3 '>
        <h1 className='text-lg font-semibold'>Rayan Khan</h1>
         <h2 className='ml-2'><b>SEO Expert</b></h2>
         <p className='p-2'>My approach involves comprehensive keyword research, on-page optimization ,  and strategic link-building
           to improve search rankings and increase traffic sustainably</p>
        </div>
       </div>

    </div>
      
    <button className='flex md:justify-center bg-yellow-400 text-white p-3 mt-20 mb-20  m-auto border-2 border-yellow-400 w-56 md:w-[300px] 
      rounded-lg hover:bg-transparent hover:text-yellow-400 '><b>View All Freelancers</b></button>

       
    </div>
  )
}
