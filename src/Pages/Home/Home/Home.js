import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../OurServices/Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;