import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../src/components/footer';

function FindUs(props) {
    return (
        <div className={`w-screen h-max lg:h-screen py-6 px-6 lg:px-24 flex flex-col items-center gap-6 bg-borabayImpureWhite`} id='find-us'>
            <span className='self-center lg:self-start text-borabayBrown font-normal text-2xl sm:text-3xl font-archane'>Find Us</span>
            <div className='w-full h-[60%] flex flex-row flex-wrap lg:flex-nowrap gap-6 lg:gap-24 justify-center items-center'>
                <div className='w-[90%] h-[40%] lg:h-[90%]'>
                    <iframe className='w-full h-full border border-slate-300 rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.783263615173!2d78.33653259277344!3d17.42218589782715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93802a2b9f33%3A0x5ea1c82bfa676769!2sSheraton%20Hyderabad%20Hotel!5e0!3m2!1sen!2sin!4v1671610519436!5m2!1sen!2sin" loading="lazy"></iframe>
                </div>
                <div className='w-[90%] h-[70%] lg:w-[40%] lg:h-[90%] flex flex-col gap-6 justify-between items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <span className='text-borabayBrown font-normal text-xl sm:text-2xl font-playfairdisplay'>{"Address :"}</span>
                        <div>
                            <span className='text-borabayDarkBrown font-normal text-lg sm:text-xl font-montserrat'>Experience the luxury at Borabay the Salon,</span><br />
                            <span className='text-borabayDarkBrown font-normal text-lg sm:text-xl font-montserrat'>G-2, D.No-115/1, Corporate Court Building,</span><br />
                            <span className='text-borabayDarkBrown font-normal text-lg sm:text-xl font-montserrat'>Nanakram Guda, ISB Road, Next to Sheraton Hotel,</span><br />
                            <span className='text-borabayDarkBrown font-normal text-lg sm:text-xl font-montserrat'>Hyderabad-500032</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-borabayBrown font-normal text-xl sm:text-2xl font-playfairdisplay'>{"Call us :"}</span>
                        <div>
                            <span className='text-borabayDarkBrown font-normal text-lg sm:text-xl'>{'+91 9604056789'}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-borabayBrown font-normal text-xl sm:text-2xl font-playfairdisplay'>{"Mail us :"}</span>
                        <span className='text-borabayDarkBrown font-normal text-lg sm:text-xl font-montserrat'>salonborabay@gmail.com</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FindUs;