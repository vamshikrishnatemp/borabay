import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FindUs(props) {
    return (
        <div className={`w-screen h-screen py-6 px-6 md:px-24 flex flex-col justify-center items-center gap-6 bg-borabayImpureWhite`} id='find-us'>
            <span className='self-start text-borabayBrown font-normal text-3xl'>Find Us</span>
            <div className='w-full h-[90%] flex flex-row flex-wrap md:flex-nowrap gap-6 md:gap-24 justify-center items-center'>
                <div className='w-[90%] md:w-[60%] h-[40%] md:h-[90%] border'>
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.31903589785!2d78.3435487747192!3d17.433855449308652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e0!3m2!1sen!2sin!4v1671427177786!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='w-[90%] h-[60%] md:w-[40%] md:h-[90%] flex flex-col justify-between'>
                    <div className='flex flex-col md:gap-3'>
                        <span className='text-borabayBrown font-normal text-2xl'>{"Address :"}</span>
                        <div>
                            <span className='text-borabayDarkBrown font-normal text-xl'>Experience the luxury at Borabay the Salon,</span><br />
                            <span className='text-borabayDarkBrown font-normal text-xl'>G-2, D.No-115/1, Corporate Court Building,</span><br />
                            <span className='text-borabayDarkBrown font-normal text-xl'>Nanakram Guda, ISB Road, Next to Sheraton Hotel,</span><br />
                            <span className='text-borabayDarkBrown font-normal text-xl'>Hyderabad-500032</span>
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-3'>
                        <span className='text-borabayBrown font-normal text-2xl'>{"Call us :"}</span>
                        <div>
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'+91 1234567890'}</span><br />
                            <span className='text-borabayDarkBrown font-normal text-xl'>{'+91 1234567890'}</span><br />
                        </div>
                    </div>
                    <div className='flex flex-col md:gap-3'>
                        <span className='text-borabayBrown font-normal text-2xl'>{"Mail us :"}</span>
                        <span className='text-borabayDarkBrown font-normal text-xl'>BusinessmailId@gmail.com</span>
                    </div>
                    <div className='flex flex-row md:flex-col gap-6 md:gap-3'>
                        <span className='text-borabayBrown font-normal text-2xl'>{"Socials :"}</span>
                        <div className='flex flex-row items-center gap-6'>
                            <Link href='#'><a><svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="#716765"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                                />
                            </svg></a></Link>
                            <Link href='#'><a><svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="#716765"
                                    d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                                />
                            </svg></a></Link>
                            <Link href='#'><a><svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="#716765"
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"
                                />
                            </svg></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindUs;