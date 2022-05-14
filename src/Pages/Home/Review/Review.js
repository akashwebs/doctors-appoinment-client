import React from 'react';

const Review = ({ review }) => {
    const { img, name, Message, location } = review;
    return (

        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='my-2'>{Message}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='ml-4'>
                            <h5 className="text-bold text-3x">{name}</h5>
                            <p className="text-bold text-xl">{location}</p>
                        </div>
                </div>
            </div>
        </div>

    );
};

export default Review;