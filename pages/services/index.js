import React, { useState, useEffect } from 'react';
import { impureWhite } from '../../styles/color-palette';

function Services(props) {
    return (
        <div className={`w-full h-full flex justify-center items-center bg-[${impureWhite}]`} id='services'>
            <span>Services</span>
        </div>
    );
}

export default Services;