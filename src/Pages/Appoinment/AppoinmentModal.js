import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';



const AppoinmentModal = ({ tretment, date,setTreatment,refetch }) => {
    const [user] = useAuthState(auth)
    const { _id, name, slots } = tretment
    const formatedDate=format(date,'PP')

    const handleBooking = (event) => {
        event.preventDefault();
        const bookingTime = event.target.bookingTime.value;
       const bookingData={
           treatmentId:_id,
           treatment:name,
           date:formatedDate,
           slot:bookingTime,
           patient:user.email,
           patientName: user.displayName,
           phone:event.target.phone.value

       }
       fetch('http://localhost:5000/booking',{
           method: 'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(bookingData)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.success){
                toast.success(`successfully booking appoinment ${formatedDate} and ${bookingTime}`)
                refetch();
                setTreatment(null)
            }else{
                toast.error(`already appoinment exsist ${data.exists?.date} and ${data.exists?.slot}`)
                setTreatment(null)

           }
       })
    }


    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-4">Booking for: {tretment.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3' action="">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name='bookingTime' className="select select-bordered w-full max-w-xs">

                            {
                                slots?.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={'Submit'} className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;