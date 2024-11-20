import React from 'react'

import Image from 'next/image'

import logo1 from "../../../public/logo1.png"
import logo2 from "../../../public/logo2.png"
import logo3 from "../../../public/logo3.png"
import logo4 from "../../../public/logo4.png"
import logo5 from "../../../public/logo5.png"
import logo6 from "../../../public/logo6.png"



export default function jobs() {
  return (
<div className='w-full h-[1800px] md:h-[1300px]  box-border bg-teal-900 text-white '>


{/* jobs sec */}
  <h1 className='text-center pt-32 md:pt-36 mb-10 text-3xl font-bold md:text-5xl'>RECENT & FEATURED JOBS</h1>
 
  {/* sec 1 */}

  <h2 className='ml-10 mb-5 text-xl font-bold md:ml-24 md:text-2xl'>FEATURED JOBS</h2>

<div className='w-full flex flex-col gap-5 md:flex-row'>

<div className='w-[350px] h-[200px] md:w-[500px] md:h-[220px] p-3 border-2 rounded m-auto flex'>
 <div className='w-[100px] h-[100px] bg-white mt-5'><Image src={logo1} alt="" width={100} height={100}></Image></div>

<div className='ml-4 text-xl md:mt-5 md:ml-7'>
 <h2 className=' text-2xl font-bold'>Development Team Lead</h2> 
<p>Washington.D.C <br /> $1200 - $1300</p>
<i className='bx bx-heart'></i><button className='w-[150px] h-[45px] ml-5 mt-3 bg-teal-700 border rounded hover:bg-teal-900 hover:border-teal-700'>  
  Apply Now</button></div>

</div>

<div className='w-[350px] h-[200px] md:w-[500px] md:h-[220px] p-2 border-2 rounded m-auto flex'>
<div className='w-[80px] h-[120px] bg-white mt-6'><Image src={logo2} alt="" width={100} height={100}></Image></div>

<div className='ml-4 text-xl md:mt-2 md:ml-7'>
 <h2 className=' text-2xl font-bold'>Make website responsive, device compatible</h2> 
<p>New York <br /> $200 - $300</p>
<i className='bx bx-heart'></i><button className='w-[150px] h-[45px] ml-5 mt-3 bg-teal-700 border rounded hover:bg-teal-900 hover:border-teal-700'>  
  Apply Now</button></div>

</div>

</div>

{/* sec 2 */}

<h2 className='ml-10 mb-5 text-xl font-bold md:ml-24 md:text-2xl mt-10'>RECENT JOBS</h2>

<div className='w-full flex flex-col gap-5 md:flex-row'>

<div className='w-[350px] h-[200px] md:w-[500px] md:h-[220px] p-2 border-2 rounded m-auto flex'>
 <div className='w-[100px] h-[100px] bg-white mt-5'><Image src={logo3} alt="" width={100} height={100}></Image></div>

<div className='ml-4 text-xl md:mt-3 md:ml-7'>
 <h2 className=' text-2xl font-bold'>Looking Graphic Designer (Logo + UI)</h2> 
<p>Washington <br /> $1200 /month</p>
<i className='bx bx-heart'></i><button className='w-[150px] h-[45px] ml-5 mt-3 bg-teal-700 border rounded hover:bg-teal-900 hover:border-teal-700'>  
  Apply Now</button></div>

</div>

<div className='w-[350px] h-[200px] md:w-[500px] md:h-[220px] p-3 border-2 rounded m-auto flex'>
 <div className='w-[100px] h-[100px] bg-white mt-5'><Image src={logo4} alt="" width={100} height={100}></Image></div>

<div className='ml-4 text-xl md:mt-3 md:ml-7'>
 <h2 className=' text-2xl font-bold'>Are you A Typography Expert?</h2> 
<p>New York <br /> $56 - $90</p>
<i className='bx bx-heart'></i><button className='w-[150px] h-[45px] ml-5 mt-3 bg-teal-700 border rounded hover:bg-teal-900 hover:border-teal-700'>  
  Apply Now</button></div>

</div>
</div>

<div className='flex flex-col gap-5 md:flex-row mt-5'>

<div className='w-[350px] h-[200px] md:w-[500px] md:h-[220px] p-2 border-2 rounded m-auto flex'>
 <div className='w-[100px] h-[100px] bg-white mt-5'><Image src={logo5} alt="" width={100} height={100}></Image></div>

<div className='ml-4 text-xl md:mt-3 md:ml-7'>
 <h2 className=' text-2xl font-bold'>WordPress Developer for ThemeForest</h2> 
<p>New Delhi <br /> $400 - $500</p>
<i className='bx bx-heart'></i><button className='w-[150px] h-[45px] ml-5 mt-3 bg-teal-700 border rounded hover:bg-teal-900 hover:border-teal-700'>  
  Apply Now</button></div>

</div>

<div className='w-[350px] h-[200px] md:w-[500px] md:h-[220px] p-2 border-2 rounded m-auto flex'>
 <div className='w-[100px] h-[100px] bg-white mt-5'><Image src={logo6} alt="" width={100} height={100}></Image></div>

<div className='ml-4 text-xl md:mt-3 md:ml-7'>
 <h2 className=' text-2xl font-bold'>Hiring Web Designer for Project</h2> 
<p>Pakistan <br /> $300 - $450</p>
<i className='bx bx-heart'></i><button className='w-[150px] h-[45px] ml-5 mt-3 bg-teal-700 border rounded hover:bg-teal-900 hover:border-teal-700'>  
  Apply Now</button></div>

</div>
</div>

<button className=' flex justify-center bg-yellow-400 text-white py-3 mt-8 md:mt-15 m-auto border-2 border-yellow-400 w-56 md:w-[300px] 
      rounded-lg px-2 hover:bg-transparent hover:text-yellow-400 '>View All</button>

   </div>
  )
}
