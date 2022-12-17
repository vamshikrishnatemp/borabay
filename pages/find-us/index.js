import React, { useState, useEffect } from 'react';
import { impureWhite } from '../../styles/color-palette';

function FindUs(props) {
    return (
        <div className={`w-full h-full flex justify-center items-center bg-[${impureWhite}]`} id='find-us'>
            <span>FindUs</span>
        </div>
    );
}

export default FindUs;