import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
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
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;