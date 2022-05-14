import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = () => {
    const [date, setDate]=useState(new Date());
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-full lg:w-[594px]' src={chair}  alt=''/>
                <div>
                    <DayPicker
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    footer=<p>You picked {format(date, 'PP')}.</p>

                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;