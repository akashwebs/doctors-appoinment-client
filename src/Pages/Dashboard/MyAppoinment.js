import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import {useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const [appoinment, setAppoinment]=useState([])
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
                method:'GET',
                headers:{
                    
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            },)
            .then(res=>{
               if(res.status===401 || res.status===403 ){
                   signOut(auth)
                   localStorage.clear('accessToken')
                   navigate('/')
               }
                return res.json()})
            .then(data=>setAppoinment(data))
        
        }
    },[])
    return (
        <div>
            <h2>this is my appoinment:{appoinment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           appoinment?.map(a=><tr>
                            <th>1</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>
                       )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;