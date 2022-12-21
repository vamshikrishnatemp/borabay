import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Modal } from '../../src/components/modal';

function Home(props) {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className={`relative w-screen h-screen flex flex-col justify-center items-center bg-borabayLightBrown`} id='home' >
            <div className='absolute w-[60px] h-[45px] top-5 left-5 flex justify-center items-center lg:hidden'>
                <Image className='w-full h-full' src={require('../../public/icons/Logo.png')} alt='Logo' />
            </div>
            <button className='absolute top-5 right-5 lg:hidden' onClick={() => { setOpenMenu(true) }}>
                <Image src={require('../../public/icons/ham-menu.png')} height={25} width={40} alt='ham-menu' />
            </button>
            {openMenu && <Modal onCloseClick={setOpenMenu} />}
            <div className='pt-[50px] w-[400px] flex flex-col justify-center self-end md:self-center items-center gap-3'>
                <span className={`py-3 text-borabayDarkBrown font-normal text-2xl font-montserrat`}>Experience Beauty In-Depth  at</span>
                <span className={`text-borabayBrown font-normal text-8xl font-higuen`}>Borabay</span>
                <span className={`text-borabayBrown text-2xl tracking-[.60em] font-hindguntur`}>THE SALON</span>
                <span className={`py-3 text-borabayDarkBrown font-normal text-2xl text-center font-montserrat`}>Where nature and science interact to concept encompassing beauty solutions</span>
                <div className='pt-[100px] hidden md:flex flex-col items-center justify-center gap-2'>
                    <span className={`text-borabayBrown font-normal text-2xl font-montserrat`}>Scroll</span>
                    <Image src={require('../../public/icons/down_arrow.png')} height={70} width={70} alt='Down-Arrow' />
                </div>
            </div>
            <div className='absolute h-[60%] w-[40%] left-0 flex items-end bottom-0'>
                <Image src={require('../../public/icons/green-leafed-girl.png')} height={600} width={380} alt='green-leafed-girl' />
                {/* <img src='../../public/icons/green-leafed-girl.png' style={{ height: '100px', width: '100px' }} alt='green-leafed-girl' /> */}
            </div>
            <div className='absolute right-0 -bottom-[0px] hidden lg:flex'>
                <Image src={require('../../public/icons/white-top-girl.png')} height={700} width={380} alt='white-top-girl' />
            </div>
        </div >
    );
}

export default Home;