import React from 'react';
import OwnButton from '../../Shared/OwnButton/OwnButton';
import contactBg from '../../../assets/images/appointment.png'


const Contacts = () => {
    return (
        <div style={{background:`url(${contactBg})`}} className='px-12 py-12 mb-28'>
            <div className='my-8'>
                <h2 className='text-primary text-center font-bold text-2xl'>OUR SERVICES</h2>
                <h2 className='text-white text-center text-3xl'>Services We Provide</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <input type="email" placeholder="Email Address" class="mb-3 input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Subject" class="mb-3 input input-bordered w-full max-w-lg" />
                <textarea placeholder="your Message" class="mb-3 input input-bordered w-full max-w-lg h-28" />
                <OwnButton>Submit</OwnButton>
            </div>

        </div>
    );
};

export default Contacts;