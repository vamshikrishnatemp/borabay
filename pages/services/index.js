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

    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        slidesPerRow: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    }

    return (
        <div className={`w-screen h-screen p-6 flex flex-col gap-4 md:gap-24 items-center bg-borabayImpureWhite border`} id='services'>
            <span className='text-borabayBrown font-normal text-3xl'>Our Services</span>
            <div className='h-0 w-0 md:w-full md:h-[400px]'>
                <Slider {...settings}>
                    <div className='p-8 flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/facial-services.png`)} width={450} height={300} alt='Facial Services' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Facial Services'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/hair-styling.png`)} width={450} height={300} alt='Hair Styling' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Hair Styling'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/hair-coloring.png`)} width={450} height={300} alt='Hair Coloring' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Hair Coloring'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/hair-spa.png`)} width={450} height={300} alt='Hair Spa' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Hair Spa'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/spa.png`)} width={450} height={300} alt='Spa' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Spa'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/nail-art-services.png`)} width={450} height={300} alt='Nail Art Services' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Nail Art Services'}</span>
                        </div>
                    </div>
                    <div className='p-8 w-[500px] flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/pedicure-manicure.png`)} width={450} height={300} alt='Pedicure & Manicure' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Pedicure & Manicure'}</span>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='w-full md:hidden'>
                <Slider {...mobileSettings}>
                    <div className='p-4 flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/facial-services.png`)} width={270} height={170} alt='Facial Services' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Facial Services'}</span>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/hair-styling.png`)} width={270} height={170} alt='Hair Styling' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Hair Styling'}</span>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/hair-coloring.png`)} width={270} height={170} alt='Hair Coloring' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Hair Coloring'}</span>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/hair-spa.png`)} width={270} height={170} alt='Hair Spa' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Hair Spa'}</span>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/spa.png`)} width={270} height={170} alt='Spa' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Spa'}</span>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/nail-art-services.png`)} width={270} height={170} alt='Nail Art Services' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Nail Art Services'}</span>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col items-center justify-center'>
                        <div className='flex justify-center items-center'>
                            <Image src={require(`../../public/icons/pedicure-manicure.png`)} width={270} height={170} alt='Pedicure & Manicure' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'Pedicure & Manicure'}</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Services;