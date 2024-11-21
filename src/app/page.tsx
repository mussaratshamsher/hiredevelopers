



import React from 'react'
import Iconbar from '../components/Iconbar'


export default function Home() {
  return (
    <div className='w-full h-[2000px] md:h-[800px] box-border bg-gradient-to-tr from-teal-950 via-black to-teal-600'  >
      <main className="text-center text-white">
        <h1 className=' md:pb-10 md:font-extrabold md:text-6xl pt-[110px] mt-10 pb-5 text-3xl'>
          <b>Build Your <br /> Powerful Career here</b></h1>
          <h2 className='text-1xl md:text-3xl m-auto'>Whether you're looking for a new career opportunity <br />
             or seeking expert freelancers to bring your project to life, <br />
             we've got you covered.</h2>

  <form className='flex md:flex-row flex-col justify-center items-center gap-2 mt-3  md:mt-6'>
      <div>
    <input type="text" placeholder='Keywords' className='py-2 text-black w-80 mt-3 md:w-[90] rounded-lg px-2'/> </div>
    <div>
      <select  className='py-2 text-black w-80 md:w-[90] rounded-lg px-2 mt-3'>
        <option className='text-gray-400'>All locations</option>
          <option> Pakistan</option>
         <option value="">India</option>
         <option value="">America</option>
         <option value=""> China</option>
         <option value="">Russia</option>
      </select></div> 
      <div>
      <select className='py-2 text-black w-80 md:w-[90] rounded-lg px-2 mt-3'>
        <option className='text-gray-500 py-2'>SEO Experts</option>
        <option value="">Web Designer</option>
        <option value="">Web Developer</option>
        <option value="">Graphic Designer</option>
        <option value="">Freelancer</option>
        <option value="">Content Writer</option>
        <option value="">SEO Marketing</option> 
      </select></div>
      <button className='bg-yellow-400 text-white py-2 mt-3 border-2 border-yellow-400 w-56 md:w-[90] 
      rounded-lg px-2 hover:bg-transparent hover:text-yellow-400 hover:border-yellow '>SUBMIT NOW</button>
     
    </form> 

    {/* <div className='flex md:flex-row flex-col mt-3 md:mt-6 justify-center items-center text-lg p-2 md:text-xl'>
      <p className=' ml-3 md:flex-row flex-col'><i className='bx bxs-square-rounded' id='i'></i>  FreeLancer</p>
      <p className='md:ml-4 md:flex-row flex-col'><i className='bx bxs-square-rounded' id='i'></i> Part Time</p>
      <p className='md:ml-4 md:flex-row flex-col'><i className='bx bxs-square-rounded' id='i'></i> Full Time</p>
    </div> */}

  <Iconbar />

      </main>
    
     </div>
  )
}

// 

