import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function AboutUs(props) {
    return (
        <div className={`w-screen h-max flex flex-col gap-6 py-6 px-6 md:px-24 bg-borabayImpureWhite`} id='about-us'>
            <span className='text-borabayBrown font-normal font-archane text-2xl sm:text-3xl self-center md:self-start'>About Us</span>
            <div className='w-full h-[90%] flex flex-row flex-wrap-reverse md:flex-nowrap gap-6 md:gap-24'>
                <div className='w-full md:w-1/2 flex flex-col-reverse md:flex-col gap-8'>
                    <span className='text-borabayDarkBrown font-normal font-playfairdisplay text-lg sm:text-xl text-center md:text-left'>Borabay is a new-age salon created with a unified blend of science and natural properties. At its heart is a calming experience that combines the sounds of the ocean with the luxury of beauty treatments performed by our expert beauticians.</span>
                    <div className='w-[100%] h-[50%]'>
                        <Image src={require('../../public/icons/facial-girl.png')} height={350} width={600} alt='facial-girl' />
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div className='w-[100%] h-[70%] flex flex-row justify-center md:justify-end'>
                        <Image src={require('../../public/icons/makeup-girl.png')} height={350} width={350} alt='makeup-girl' />
                    </div>
                    <span className='text-borabayDarkBrown font-normal font-playfairdisplay text-lg sm:text-xl text-center md:text-right'>Borabay is a one-stop shop for renewal and restoration. We are a professional team that understands the matrix of beauty and brings out the best in it for you. From hair styling services to beauty treatments and cosmetic advances to rejuvenation rituals, we have it all.</span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;