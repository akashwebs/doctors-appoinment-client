import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Looding from '../Shared/Looding/Looding';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/';
    const [token]=useToken(user || gUser)
    useEffect(() => {
        if(token){
            navigate(from, { replace: true });
          }
    }, [token])

    let errorMessage;
    if (error || gError) {
        errorMessage = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return <Looding></Looding>
    }


   



    const handleLogin = data => {

        signInWithEmailAndPassword(data.email, data.password)


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
                                <span className="label-text">Your Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: {
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
                                {errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}


                            </label>
                        </div>
                        {errorMessage}
                        <input type="submit" value={'Login'} className='btn w-full max-w-xs' />
                        <p className='mt-2'><small>New to Doctors Portal? <Link to={'/signup'} className="text-secondary">Create new account</Link></small></p>
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