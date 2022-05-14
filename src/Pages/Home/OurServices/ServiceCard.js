import React from 'react';

const ServiceCard = ({service}) => {
    const {img, name, discription}=service;
    
    return (

        <div className="card  bg-base-100 shadow-xl pt-4">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
                
            </div>
        </div>

    );
};

export default ServiceCard;