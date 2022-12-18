import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function AboutUs(props) {
    return (
        <div className={`w-full h-full flex flex-col gap-6 py-6 px-24 bg-borabayImpureWhite`} id='about-us'>
            <span className='m-3 text-borabayBrown font-normal text-3xl'>AboutUs</span>
            <div className='w-full h-[90%] flex flex-row flex-wrap md:flex-nowrap gap-24'>
                <div className='w-1/2 flex flex-col gap-8'>
                    <span className='text-borabayDarkBrown font-normal text-2xl'>We are a team of professionals, who understand the matrix behind beauty and bring out the best of it for you. At Borabay, a variety of services and customer experience is our priority. From a range of hair styling services, beauty treatments, and cosmetic advances to rejuvenation rituals - We are a one-stop destination for renewal & restoration.</span>
                    <div className='w-[100%] h-[50%]'>
                        <Image src={require('../../public/icons/facial-girl.png')} height={350} width={600} alt='facial-girl' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <div className='w-[100%] h-[60%] flex flex-row justify-end'>
                        <Image src={require('../../public/icons/makeup-girl.png')} height={350} width={350} alt='makeup-girl' />
                    </div>
                    <span className='text-borabayDarkBrown font-normal text-2xl text-right'>We are a team of professionals, who understand the matrix behind beauty and bring out the best of it for you. At Borabay, a variety of services and customer experience is our priority. From a range of hair styling services, beauty treatments, and cosmetic advances to rejuvenation rituals - We are a one-stop destination for renewal & restoration.</span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;