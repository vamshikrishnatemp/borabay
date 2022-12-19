import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/navbar';
import Home from './home'
import AboutUs from './about-us';
import Services from './services';
import FindUs from './find-us';
import BrandSponsors from './brand-sponsors';

export default function WebsiteHome() {
  return (
    <div className='h-screen w-screen scroll-smooth overflow-y-auto overflow-x-hidden custom-scroll'>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <BrandSponsors />
      <FindUs />
    </div>
  );
}
