import React from 'react';

const ServiceCard = ({service}) => {
    const {img, name, discription}=service;
    
    return (

        <div class="card  bg-base-100 shadow-xl pt-4">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{discription}</p>
                
            </div>
        </div>

    );
};

export default ServiceCard;