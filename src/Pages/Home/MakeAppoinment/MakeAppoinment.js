import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import OwnButton from '../../Shared/OwnButton/OwnButton';


const MakeAppoinment = () => {
    return (
        <div style={{backgroundImage:`url(${appoinment})`}} className='flex justify-center items-center my-24 px-12'>
            <div className='flex-1 hidden md:block'>
                <img className='mt-[-100px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h2 className='text-primary'>Appointment</h2>
                <h3 className='font-bold text-3xl'>Make an appointment Today</h3>
                <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <OwnButton>get started</OwnButton>
            </div>
        </div>
    );
};

export default MakeAppoinment;