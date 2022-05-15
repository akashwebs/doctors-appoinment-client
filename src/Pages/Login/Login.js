import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    
    return (

        <div className='flex justify-center items-center min-h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-3xl text-accent">Login</h2>
                    <div class="divider">OR</div>

                    <div class="card-actions justify-center">
                        <button
                            class="btn btn-outline"
                            onClick={()=>signInWithGoogle()}
                        >Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;