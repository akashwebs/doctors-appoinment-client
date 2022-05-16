import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data)

    }


    return (

        <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl text-accent">Login</h2>


                    <form onSubmit={handleSubmit(handleLogin)}>
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

                        <input type="submit" value={'Login'} className='btn w-full max-w-xs' />
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

export default Login;