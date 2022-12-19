import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function BrandSponsors(props) {
    return (
        <div className={`w-screen h-screen py-6 px-24 flex flex-col justify-center items-center bg-borabayImpureWhite border`} id='brand-sponsors'>
            <span className='self-start text-borabayBrown font-normal text-3xl'>Founders</span>
            <div className='w-full h-[40%] mt-6 flex flex-row gap-24'>
                <div className='w-[60%]'>
                    <span className='text-borabayDarkBrown font-normal text-xl'>Borabay is the brainchild of USA return Dr. Anu Karjela, who has 20+ years of experience in the medical world. She is an ardent observer of cosmetic treatments encouraged around the globe and aims to introduce the best salon experience in the Indian market through her new venture.</span>
                </div>
                <div className='w-[40%] h-[100%] flex justify-end'>
                    <Image src={require('../../public/icons/makeup-girl.png')} height={350} width={300} alt='makeup-girl' />
                </div>
            </div>
            <span className='text-borabayBrown font-normal text-3xl'>Partnered Brands</span>
            <div className='w-full h-[30%] my-8 flex flex-row justify-evenly items-center'>
                <Image src={require('../../public/icons/loreal-logo.png')} height={70} width={200} alt='loreal-logo' />
                <Image src={require('../../public/icons/kerastase-logo.png')} height={70} width={200} alt='kerastase-logo' />
                <Image src={require('../../public/icons/casmara-logo.png')} height={70} width={200} alt='casmara-logo' />
            </div>
            <div className='w-full h-[30%] my-8 flex flex-row justify-evenly items-center'>
                <Image src={require('../../public/icons/shankara-logo.png')} height={100} width={100} alt='shankara-logo' />
                <Image src={require('../../public/icons/dyson-logo.png')} height={70} width={200} alt='dyson-logo' />
                <Image src={require('../../public/icons/rl-logo.png')} height={100} width={100} alt='rl-logo' />
            </div>
        </div>
    );
}

export default BrandSponsors;