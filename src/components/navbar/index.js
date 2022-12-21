import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className={`relative h-[60px] w-screen hidden lg:flex justify-center items-center gap-10 bg-borabayLightBrown text-lg text-borabayDarkBrown`}>
      <div className='absolute w-[70px] h-[50px] top-2 left-[5%] hidden lg:flex '>
        <Image className='w-full h-full' src={require('../../../public/icons/Logo.png')} alt='Logo' />
      </div>
      <Link href='#home'><a>Home</a></Link>
      <Link href='#about-us'><a>About Us</a></Link>
      <Link href='#services'><a>Services</a></Link>
      <Link href='#brand-sponsors'><a>Brand Sponsors</a></Link>
      <Link href='#find-us'><a>Find Us</a></Link>
    </div>
  )
}
