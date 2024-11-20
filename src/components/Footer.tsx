

import Link from 'next/link'
import React from 'react'



export default function Footer() {
  return (
    <div className="w-100 py-20 bg-teal-800 text-white">
        <main className="grid grid-cols-1 gap-10 md:grid-cols-3 content-center md:justify-around">


   <div className='flex justify-center items-center'>
    <ul>
        <li className='font-extrabold text-3xl mb-5'>Menu</li>
   <li><i className='bx bxs-square-rounded' id='menu'></i><Link href="/" className='hover:text-yellow-400'>HOME</Link></li>
              
      <li><i className='bx bxs-square-rounded' id='menu'></i><Link href="/about" className='hover:text-yellow-400'> ABOUT</Link>  </li>
        
     <li><i className='bx bxs-square-rounded' id='menu'></i><Link href="/jobs" className='hover:text-yellow-400' > JOBS</Link>   </li>          
        
     <li><i className='bx bxs-square-rounded' id='menu'></i> <Link href="/experts" className='hover:text-yellow-400'>  FREELANCERS</Link></li></ul>              
   </div>

<div  className='flex flex-col justify-center items-center text-4xl'>
    <h1 className='font-extrabold text-3xl  mt-28 mb-5'>Social links</h1>
    <div><i id='menu' className='bx bxl-facebook-circle'></i> <i id='menu' className='bx bxl-linkedin'></i> 
    <i id='menu' className='bx bxl-instagram'></i> <i id='menu' className='bx bxl-twitter' ></i></div>
</div>

 <div  className='flex flex-col justify-center items-center'> 
<h1 className='font-extrabold text-3xl mb-5  mt-28 md:mt-20'>Newsletter</h1>
<div><input type="text" placeholder='Enter Your Email' className='py-4 text-black w-80 md:w-[90] rounded-lg px-2'/> </div>

<button className=' bg-yellow-400 text-white p-3 mt-10 mb-20 m-auto border-2 border-yellow-400 w-56 md:w-[300px] 
      rounded-lg hover:bg-transparent hover:text-yellow-400 md:text-[22px] text-[18px]'>Subscribe</button>   
</div>

        </main>
        </div>
  )
}
