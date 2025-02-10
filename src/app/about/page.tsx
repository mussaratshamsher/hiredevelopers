import Image from 'next/image';
import React from 'react'

import dev from "./../../../public/dev.jpg"

export default function About() {
  return (
    <div className="container max-w-[1440px] mx-auto">
      
    <div className='mt-[100px] flex flex-col-reverse md:flex-row mb-10 md:mt-5'>

    <Image src={dev} alt="" width={500} height={500} 
    className='w-[350px] h-[350px] box-border md:w-[700px] md:h-[400px] border-2 rounded-lg mt-52'/>

<div  className='w-[350px] h-[400px] md:w-[600px] md:h-[400px] md:ml-10  box-border md:mt-40'>

  <h1 className='font-bold text-3xl p-2 md:text-4xl ml-4'>About Us</h1>
  <h2 className='font-semibold text-[20px] ml-4'>Bridging the Gap between Talent and Opportunity</h2>
    <p className='text-[22px] text-left mr-4 ml-4'> We believe that everyone deserves to find their dream 
    job or work with the best talent in the industry.
       That's why we created a platform that brings together job seekers and employers in a seamless and efficient way. 
       Our mission is to provide a user-friendly
       experience, foster meaningful connections, and help people achieve their career and business goals</p>
       <button className='bg-yellow-400 text-white py-2 border-2 hover:border-yellow-400 w-56 md:w-[90] 
      rounded-lg px-3 hover:bg-transparent hover:text-yellow-400 ml-4'>Read More</button>

</div>

          
    </div>

    </div>
  )
}
