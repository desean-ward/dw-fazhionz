import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import AnimatedPage from '../../components/animated-page/animated-page.component'

import './sign-in-and-sign-up.styles.scss';

/* Houses the Sign In and Sign Out Components */
const SignInSignUp = () => {
    return (
        <AnimatedPage>
            <div className='sign-in-and-sign-up'>
            <div>This is a test</div>
                <SignIn className='sign-in' />
                <SignUp className='sign-up' />
            </div>
        </AnimatedPage>
    )
};

export default SignInSignUp;