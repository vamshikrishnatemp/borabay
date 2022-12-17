import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { brown, lightBrown, darkBrown } from '../../styles/color-palette';

function Home(props) {
    return (
        <div className={`relative w-full h-full flex justify-center items-center bg-[${lightBrown}]`} id='home' >
            <div className='absolute -top-8 left-20'>
                <Image src={require('../../public/icons/Logo.png')} height={100} width={120} alt='Logo' />
            </div>
            <div className='pt-[50px] w-[500px] flex flex-col justify-center items-center gap-3'>
                <span className={`py-3 text-[${darkBrown}] font-normal text-2xl font-montserrat`}>Experience Beauty In-Depth  at</span>
                <span className={`text-[${brown}] font-normal text-8xl`}>Borabay</span>
                <span className={`text-[${brown}] text-2xl tracking-[.60em]`}>THE SALON</span>
                <span className={`py-3 text-[${darkBrown}] font-normal text-2xl text-center font-montserrat`}>Where nature and science interact to concept encompassing beauty solutions</span>
                <div className='pt-[100px] flex flex-col items-center justify-center gap-2'>
                    <span className={`text-[${brown}] font-normal text-2xl font-montserrat`}>Scroll</span>
                    <Image src={require('../../public/icons/down_arrow.png')} height={70} width={70} alt='Down-Arrow' />
                </div>
            </div>
            <div className='absolute left-0 -bottom-[6px]'>
                <Image src={require('../../public/icons/green-leafed-girl.png')} height={650} width={500} alt='green-leafed-girl' />
            </div>
            <div className='absolute right-0 -bottom-[6px]'>
                <Image src={require('../../public/icons/white-top-girl.png')} height={700} width={400} alt='white-top-girl' />
            </div>
        </div >
    );
}

export default Home;