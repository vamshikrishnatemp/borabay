import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { darkBrown, lightBrown } from '../../../styles/color-palette';

export default function Navbar() {
  return (
    <div className={`relative h-[50px] w-full flex justify-center items-center gap-10 bg-[${lightBrown}]`}>
      <Link className={`cursor-pointer text-[${darkBrown}]`} activeClass='active' to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
      <Link className={`cursor-pointer text-[${darkBrown}]`} activeClass='active' to="about-us" spy={true} smooth={true} offset={0} duration={500}>About Us</Link>
      <Link className={`cursor-pointer text-[${darkBrown}]`} activeClass='active' to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
      <Link className={`cursor-pointer text-[${darkBrown}]`} activeClass='active' to="find-us" spy={true} smooth={true} offset={0} duration={500}>Find Us</Link>
    </div>
  )
}
