import React from 'react';

const Services = ({ service,setTreatment }) => {
    const { name, slots } = service;
    return (

        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-primary text-center">{name}</h2>
                <p>{slots.length > 1 ? slots[0] : <span className='text-red-600'>no slots Available</span>}</p>
                <p>{slots.length} space Available</p>
                <div className="card-actions justify-center">
                    
                    <label
                        disabled={slots.length < 1}
                        htmlFor="booking-modal"
                        className="modal-button btn btn-secondary text-white"
                        onClick={()=>setTreatment(service)}
                        >
                        Book Appoinment
                        
                    </label>
                </div>
            </div>
        </div>

    );
};

export default Services;