import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index,refetch }) => {
    const { name, img, speciality,email } = doctor;
    const handleDeleteDoctor=(email)=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:"DELETE",
            headers: {
                authorization: `Beareer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                refetch()
                toast.success(`${name} deleted done`)
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={()=>handleDeleteDoctor(email)} class="btn btn-active btn-secondary">Button</button></td>
        </tr>

    );
};

export default DoctorRow;