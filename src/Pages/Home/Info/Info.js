import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'



const Info = () => {

    const infos = [
        {
            img: clock,
            bgColor: 'bg-gradient-to-r from-secondary to-primary',
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, soluta.'
        },
        {
            img: marker,
            bgColor: 'bg-neutral',
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, soluta.'
        },
        {
            img: phone,
            bgColor: 'bg-gradient-to-r from-secondary to-primary',
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, soluta.'
        }
    ]


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12'>
            {infos.map((info,index)=><InfoCard info={info} key={index}></InfoCard>)}
        </div>
    );
};

export default Info;