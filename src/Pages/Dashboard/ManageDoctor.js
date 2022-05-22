import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding/Looding';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Beareer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Looding></Looding>
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       doctors.map((doctor,index)=><DoctorRow
                       key={doctor._id}
                       doctor={doctor}
                       index={index}
                       refetch={refetch}
                       ></DoctorRow>)
                   }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;