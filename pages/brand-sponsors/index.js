import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function BrandSponsors(props) {
    return (
        <div className={`w-screen h-max py-6 px-6 md:px-24 flex flex-col justify-center items-center bg-borabayImpureWhite border gap-8`} id='brand-sponsors'>
            <span className='self-center md:self-start text-borabayBrown font-normal text-3xl'>Founders</span>
            <div className='w-full h-[40%] md:mt-6 flex flex-row sm:gap-10 md:gap-24 justify-center items-center'>
                <span className='w-full text-borabayDarkBrown font-normal text-xl text-center sm:text-left'>Borabay is the brainchild of USA return Dr. Anu Karjela, who has 20+ years of experience in the medical world. She is an ardent observer of cosmetic treatments encouraged around the globe and aims to introduce the best salon experience in the Indian market through her new venture.</span>
                <div className='w-[40%] h-[100%] hidden sm:flex sm:justify-end'>
                    <Image src={require('../../public/icons/makeup-girl.png')} height={350} width={300} alt='makeup-girl' />
                </div>
            </div>
            <span className='text-borabayBrown font-normal text-3xl'>Partnered Brands</span>
            <div className='w-full md:my-8 flex flex-row justify-evenly items-center flex-wrap gap-12'>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/loreal-logo.png')} height={70} width={220} alt='loreal-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/kerastase-logo.png')} height={70} width={220} alt='kerastase-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/casmara-logo.png')} height={70} width={220} alt='casmara-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/shankara-logo.png')} height={100} width={100} alt='shankara-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/dyson-logo.png')} height={70} width={220} alt='dyson-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/rl-logo.png')} height={100} width={100} alt='rl-logo' />
                </div>
            </div>
            {/* <div className='w-full h-[30%] my-8 flex flex-row justify-evenly items-center flex-wrap'>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/shankara-logo.png')} height={100} width={100} alt='shankara-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/dyson-logo.png')} height={70} width={200} alt='dyson-logo' />
                </div>
                <div className='w-[300px] flex justify-center items-center'>
                    <Image src={require('../../public/icons/rl-logo.png')} height={100} width={100} alt='rl-logo' />
                </div>
            </div> */}
        </div>
    );
}

export default BrandSponsors;