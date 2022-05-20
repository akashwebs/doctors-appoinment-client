import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const handleSignup =async data => {
    

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
                                required:{
                                value: true,
                                message: 'name is required'
                                }
                                
                            })}
                            placeholder="Type your Name"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span> }
                        
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required:{
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
                        {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span> }
                        {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span> }
                            
                            
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialized</span>
                        </label>
                        <input
                            type="text"
                            {...register("specialized", {
                                required:{
                                value: true,
                                message: 'specialized is required'
                                },
                            })}
                            placeholder="Type specialized"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                       
                        {errors.specialized?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.specialized.message}</span> }
                            
                            
                        </label>
                    </div>
    
                    <input type="submit" value={'Add Doctor'} className='btn uppercase w-full max-w-xs' />
                  
                </form>
        </div>
    );
};

export default AddDoctor;