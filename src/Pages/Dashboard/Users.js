import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding/Looding';
import UserRow from './UserRow'

const Users = () => {

    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/users',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Looding></Looding>
    }
   
    return (
        <div>
            <h2>this is user:{users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
             
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;