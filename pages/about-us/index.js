import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function AboutUs(props) {
    return (
        <div className={`w-screen h-max flex flex-col gap-6 py-6 px-6 md:px-24 bg-borabayImpureWhite`} id='about-us'>
            <span className='text-borabayBrown font-normal text-3xl self-center md:self-start'>AboutUs</span>
            <div className='w-full h-[90%] flex flex-row flex-wrap-reverse md:flex-nowrap gap-6 md:gap-24'>
                <div className='w-full md:w-1/2 flex flex-col-reverse md:flex-col gap-8'>
                    <span className='text-borabayDarkBrown font-normal text-xl text-center md:text-left'>We are a team of professionals, who understand the matrix behind beauty and bring out the best of it for you. At Borabay, a variety of services and customer experience is our priority. From a range of hair styling services, beauty treatments, and cosmetic advances to rejuvenation rituals - We are a one-stop destination for renewal & restoration.</span>
                    <div className='w-[100%] h-[50%]'>
                        <Image src={require('../../public/icons/facial-girl.png')} height={350} width={600} alt='facial-girl' />
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-4'>
                    <div className='w-[100%] h-[70%] flex flex-row justify-center md:justify-end'>
                        <Image src={require('../../public/icons/makeup-girl.png')} height={350} width={350} alt='makeup-girl' />
                    </div>
                    <span className='text-borabayDarkBrown font-normal text-xl text-center md:text-right'>We are a team of professionals, who understand the matrix behind beauty and bring out the best of it for you. At Borabay, a variety of services and customer experience is our priority. From a range of hair styling services, beauty treatments, and cosmetic advances to rejuvenation rituals - We are a one-stop destination for renewal & restoration.</span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;