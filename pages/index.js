import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/navbar';
import Home from './home'
import AboutUs from './about-us';
import Services from './services';
import FindUs from './find-us';

export default function WebsiteHome() {
  return (
    <div className='h-screen w-screen custom-scroll'>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <FindUs />
    </div>
  );
}
