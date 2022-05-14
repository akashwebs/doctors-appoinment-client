import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'
import ServiceCard from '../ServiceCard';
import tretment from '../../../../assets/images/treatment.png'
import OwnButton from '../../../Shared/OwnButton/OwnButton';

const Services = () => {
    const serviceCard = [
        { name: 'Fluoride Treatment', discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: fluoride },
        { name: 'Cavity Filling', discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: cavity },
        { name: 'Teeth Whitening', discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: teeth }
    ]

    return (
        <div className='py-12'>
            <div className='my-8'>
                <h2 className='text-primary text-center font-bold text-2xl'>OUR SERVICES</h2>
                <h2 className='text-accent text-center text-3xl'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 px-12 gap-5 '>
                {

                    serviceCard.map((service, index) => {
                        return <ServiceCard
                            key={index}
                            service={service}
                        ></ServiceCard>
                    })
                }
            </div>

            <div className="card lg:card-side mt-24 px-12 mx-auto md:px-40">
                <figure>
                    <img className='w-96 h-96' src={tretment} alt="Album" style={{objectFit:''}}/>
                </figure>
                <div className="pl-0 md:pl-12 flex items-center">
                    <div>
                        <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                        <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions">
                        <OwnButton>Get Started</OwnButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;