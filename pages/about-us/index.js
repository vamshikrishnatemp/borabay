import React, { useState, useEffect } from 'react';
import { impureWhite } from '../../styles/color-palette';

function AboutUs(props) {
    return (
        <div className={`w-full h-full flex justify-center items-center bg-[${impureWhite}]`} id='about-us'>
            <span>AboutUs</span>
        </div>
    );
}

export default AboutUs;