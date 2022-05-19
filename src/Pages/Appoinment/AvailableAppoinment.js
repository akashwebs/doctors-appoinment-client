import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding/Looding';
import AppoinmentModal from './AppoinmentModal';
import Services from './Services';

const AvailableAppoinment = ({ date }) => {

    // const [services, setService]=useState([])
    const [tretment, setTreatment] = useState(null)

    const formatedDate = format(date, 'PP');

    const { data: services,isLoading,refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json())
    )

    /*   useEffect(()=>{
          fetch(`http://localhost:5000/available?date=${formatedDate}`)
          .then(res=>res.json())
          .then(data=>setService(data));
      },[formatedDate])
   */
  if(isLoading){return <Looding></Looding>}

    return (
        <div className='my-24 px-12'>
            <h3 className="font-bold text-center text-2xl text-primary">Available Appointments on {format(date, 'PP')}</h3>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        
                    ></Services>)
                }
            </div>
            {tretment && <AppoinmentModal 
            setTreatment={setTreatment} 
            date={date} 
            tretment={tretment}
            refetch={refetch}
            ></AppoinmentModal>}

        </div>
    );
};

export default AvailableAppoinment;