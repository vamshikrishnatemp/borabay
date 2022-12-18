import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

function Services(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={`w-full h-full p-6 flex flex-col gap-24 items-center bg-borabayImpureWhite border`} id='services'>
            <span className='text-borabayBrown font-normal text-3xl'>Our Services</span>
            <div className='w-full h-[400px]'>
                <Slider {...settings}>
                    <div className='p-8 flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/facial-services.png`)} width={400} height={300} alt='Facial Services' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Facial Services'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div>
                            <Image src={require(`../../public/icons/hair-styling.png`)} width={400} height={300} alt='Hair Styling' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Hair Styling'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div>
                            <Image src={require(`../../public/icons/hair-coloring.png`)} width={400} height={300} alt='Hair Coloring' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Hair Coloring'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div>
                            <Image src={require(`../../public/icons/hair-spa.png`)} width={400} height={300} alt='Hair Spa' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Hair Spa'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div>
                            <Image src={require(`../../public/icons/spa.png`)} width={400} height={300} alt='Spa' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Spa'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div>
                            <Image src={require(`../../public/icons/nail-art-services.png`)} width={400} height={300} alt='Nail Art Services' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Nail Art Services'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div>
                            <Image src={require(`../../public/icons/pedicure-manicure.png`)} width={400} height={300} alt='Pedicure & Manicure' />
                        </div>
                        <div className='flex justify-center items-center justify-center'>
                            <span className='text-borabayDarkBrown font-normal text-2xl'>{'Pedicure & Manicure'}</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Services;