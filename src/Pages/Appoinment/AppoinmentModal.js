import { format } from 'date-fns';
import React from 'react';

const AppoinmentModal = ({ tretment, date }) => {
    const {_id,slots}=tretment

    const handleBooking=(event)=>{
        event.preventDefault();
        const bookingTime=event.target.bookingTime.value;
    }
    
    
    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-4">Booking for: {tretment.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3' action="">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name='bookingTime' className="select select-bordered w-full max-w-xs">

                            {
                                slots?.map(slot=><option value={slot}>{slot}</option>)
                            }
                            
                        </select>

                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={'Submit'} className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;