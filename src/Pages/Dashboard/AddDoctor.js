import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding/Looding';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading } = useQuery('doctorService',()=>fetch('http://localhost:5000/services').then(res => res.json()))


    const handleSignup = async data => {
        console.log(data)

    }
    if (isLoading) {
        return <Looding></Looding>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is required'
                            }

                        })}
                        placeholder="Type your Name"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            },
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'invalid email'
                            }
                        })}
                        placeholder="Type Email"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialized</span>
                    </label>
                    <select {...register('specialized')} class="select select-bordered w-full max-w-xs">
                        {
                            services?.map(service => <option
                                key={service._id}
                                value={service?.name}
                            >
                                {service?.name}
                            </option>)
                        }
                      
                    </select>

                    <label className="label">




                    </label>
                </div>

                <input type="submit" value={'Add Doctor'} className='btn uppercase w-full max-w-xs' />

            </form>
        </div>
    );
};

export default AddDoctor;