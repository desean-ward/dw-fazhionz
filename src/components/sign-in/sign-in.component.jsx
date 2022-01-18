import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';

import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

/* Create a class component to store state */
class SignIn extends Component {
    constructor (props) {
        super (props);

        this.state = {
            email: '',
            password: '',
            displayName: ''
        }
    }

    /* Prevent default event from firing */
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password, displayName} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);

            /* Clear out the state */
            this.setState({ email: '', password: '', displayName: ''});
         } catch (error) {
                alert("Email and/or password are incorrect.");
                console.error(error);
            }
     }

    /* Handles the change of Input  AND password fields*/
    handleChange = event => {
        /* Pull value and name off of target */
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='maroon'>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        type='email' 
                        name='email'
                        value={ this.state.email }
                        label="Email"
                        handleChange={ this.handleChange } 
                        required />
                    
                    <FormInput 
                        type='password'
                        name='password'
                        value={ this.state.password }
                        label="Password"
                        handleChange={ this.handleChange }
                        required />

                    <div className='buttons'>
                        <CustomButton className='custom-button' type='submit'>Sign In</CustomButton>
                        
                        <CustomButton 
                            onClick={ signInWithGoogle } isGoogleSignIn>
                            {' '}
                            <div className="logo">
                                <img src="../../images/google.png" alt="Google" />
                            </div>
                            Sign In With Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;