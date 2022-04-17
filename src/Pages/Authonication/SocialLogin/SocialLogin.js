import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../init.firebase';
import Loading from '../../Shared/Loding/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorCase;

    if(loading){
        return <Loading></Loading>
    }
    if (error){
        errorCase = <p className='text-danger'>Error: {error?.message} </p>
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div className='text-center'>
            {errorCase}
            </div>
            <div className='text-center'>
                <button className='btn btn-info ms-3'
                onClick={() => signInWithGoogle()}>
                    Google SignIn
                </button>
                <button className='btn btn-info ms-3'>
                    Facebook SignIn
                </button>
            </div>
            
        </div>
    );
};

export default SocialLogin;