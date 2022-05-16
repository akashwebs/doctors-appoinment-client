import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Looding from '../Shared/Looding/Looding';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating] = useUpdateProfile(auth);


      if(user || gUser){
      }
      let errorMessage;
      if(error || gError){
          errorMessage=<p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }
      if(loading || gLoading || updating){
          return <Looding></Looding>
      }

      
      

    const handleLogin =async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });

    }


    
    
    return (
        <div className='flex justify-center items-center min-h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-3xl text-accent">Sign Up</h2>


                <form onSubmit={handleSubmit(handleLogin)}>
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
                            <span className="label-text">Your Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required:{
                                value: true,
                                message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password should be 6 charecter or longer' 
                                  }
                            })}
                            placeholder="Type password"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span> }
                        {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span> }
                            
                            
                        </label>
                    </div>
                    {errorMessage}
                    <input type="submit" value={'Sign Up'} className='btn uppercase w-full max-w-xs' />
                    <p className='mt-2'><small>Already have an account? 
                        <Link to={'/login'} className="text-secondary">Please Login</Link></small></p>
                </form>

                <div className="divider">OR</div>

                <div className="card-actions justify-center">
                    <button
                        className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Google</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;