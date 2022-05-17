import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentModal from './AppoinmentModal';
import Services from './Services';

const AvailableAppoinment = ({date}) => {

    const [services, setService]=useState([])
    const [tretment, setTreatment]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])

    
    return (
        <div className='my-24 px-12'>
            <h3 className="font-bold text-center text-2xl text-primary">Available Appointments on {format(date,'PP')}</h3>
          

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Services 
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        ></Services>)
                }
            </div>
            {tretment &&  <AppoinmentModal setTreatment={setTreatment} date={date} tretment={tretment}></AppoinmentModal>}
            
        </div>
    );
};

export default AvailableAppoinment;