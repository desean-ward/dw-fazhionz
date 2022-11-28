import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import AnimatedPage from '../../components/animated-page/animated-page.component'

import './authentication.styles.scss';

/* Houses the Sign In and Sign Out Components */
const Authentication = () => {
    return (
        <AnimatedPage>
            <div className='sign-in-and-sign-up'>
                <SignIn className='sign-in' />
                <SignUp className='sign-up' />
            </div>
        </AnimatedPage>
    )
};

export default Authentication;