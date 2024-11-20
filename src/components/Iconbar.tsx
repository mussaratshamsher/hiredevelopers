


import Image from 'next/image'
import React from 'react'

import c1 from "./../../public/c1.png"
import c2 from "./../../public/c2.png"
import c3 from "./../../public/c3.png"
import c4 from "./../../public/c4.png"
import c5 from "./../../public/c5.png"
import c6 from "./../../public/c6.png"


export default function Iconbar() {
  return (
    <div className='flex md:flex-row flex-col mt-5 md:mt-10 mb-0'>

     <div className='bg-yellow-400 border-2 border-white rounded hover:bg-yellow-500 p-6 flex flex-col justify-center items-center md:w-60'>
    <Image src={c1} alt="" width={100} height={100} className=''></Image> <br />
    <p className='text-lg font-semibold'>Web Design</p>
  </div>


  <div className='bg-yellow-400 border-2 border-white rounded hover:bg-yellow-500 p-6 flex flex-col justify-center items-center md:w-60 '>
    <Image src={c2} alt="" width={100} height={100} ></Image> <br />
    <p className='text-lg font-semibold'>Web Devleopment</p>
  </div>
  
  <div className='bg-yellow-400 border-2 border-white rounded hover:bg-yellow-500 p-6 flex flex-col justify-center items-center md:w-60'>
    <Image src={c3} alt="" width={100} height={100} ></Image> <br />
    <p className='text-lg font-semibold'>Graphic Design</p>
  </div>
  
  <div className='bg-yellow-400 border-2 border-white rounded hover:bg-yellow-500 p-6 flex flex-col justify-center items-center md:w-60'>
    <Image src={c4} alt="" width={100} height={100}></Image> <br />
    <p className='text-lg font-semibold'>Seo marketing</p>
  </div>
  
  <div className='bg-yellow-400 border-2 border-white rounded hover:bg-yellow-500 p-6 flex flex-col justify-center items-center md:w-60'>
    <Image src={c5} alt="" width={100} height={100} ></Image> <br />
    <p className='text-lg font-semibold'>Accounting</p>
  </div>
  
  <div className='bg-yellow-400 border-2 border-white rounded hover:bg-yellow-500 p-6 flex flex-col justify-center items-center md:w-60'>
    <Image src={c6} alt="" width={100} height={100} ></Image> <br />
    <p className='text-lg font-semibold'>Contnet Writing</p>
  </div>


    </div>
  )
}
