import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role}=user;

    const handleMakeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status===403){
                toast.error('Faild to make and admin')
            }
            return res.json()
        })
        .then(data=>{
            console.log(data)
           if(data.modifiedCount>0){
            refetch()
            toast.success('sucessfully made an admin')
           }
        })
        
    }
    
    
    return (
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !=='admin' && <button onClick={handleMakeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
        
    );
};

export default UserRow;