import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={`relative h-[50px] w-screen flex justify-center items-center gap-10 bg-borabayLightBrown text-xl text-borabayDarkBrown`}>
      <Link href='#home'><a>Home</a></Link>
      <Link href='#about-us'><a>About Us</a></Link>
      <Link href='#services'><a>Services</a></Link>
      <Link href='#brand-sponsors'><a>Brand Sponsors</a></Link>
      <Link href='#find-us'><a>Find Us</a></Link>
    </div>
  )
}
