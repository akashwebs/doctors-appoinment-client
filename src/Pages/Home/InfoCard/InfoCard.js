import React from 'react';

const infoCard = ({info}) => {

    const {img, title,bgColor, description}=info;
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgColor}`}  >
            <figure className='pl-5 py-3'>
                <img src={img}/>

                </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
               
            </div>
        </div> 
    );
};

export default infoCard;