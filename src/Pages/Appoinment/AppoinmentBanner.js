import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({date, setDate}) => {
    
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-full lg:w-[594px]' src={chair}  alt=''/>
                <div>
                    <DayPicker
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
                   
        </div>
    );
};

export default AppoinmentBanner;