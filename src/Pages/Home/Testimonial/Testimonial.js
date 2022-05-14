import React from 'react';
import qoute from '../../../assets/icons/quote.svg'
import pepole1 from '../../../assets/images/people1.png'
import pepole2 from '../../../assets/images/people2.png'
import pepole3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonial = () => {
   
    const reviews = [
        { _id: 1, Message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: pepole1, name: 'winson Herry', location: 'California' },
        { _id: 2, Message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: pepole2, name: 'winson Herry', location: 'California' },
        { _id: 3, Message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img: pepole3, name: 'winson Herry', location: 'California' }
    ]


    return (
        <section className='px-12 my-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-bold text-xl text-primary'>Testimonial</h4>
                    <h2 className="text-3xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={qoute} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=><Review review={review} key={review._id}></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonial;