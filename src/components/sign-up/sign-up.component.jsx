import React, { useState, useContext, useEffect, Fragment } from 'react';

import FormInput from '../form-input/form-input.component';
import GlassModal from '../glass-popup/glass-popup.component'

import { UserContext } from '../../context/user.context'
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import { SignUpFormContainer, SignUpForm, ButtonsContainer } from './sign-up.styles.jsx'

//import './sign-up.styles.scss';



const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
};

const SignUp = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields)
    const { email, password, confirmPassword, displayName } = formFields
    const [modal, setModal] = useState(false)
	const [error, setError] = useState('')

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const showModal = () => {
		setModal(!modal)
	}

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert ('Passwords do not match!');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword (email, password );

           setCurrentUser(user)
           

            await createUserDocumentFromAuth (user, { displayName });

             // Clear out the form //
           setFormFields(defaultFormFields)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Cannot create user. Email already in use.')
                showModal()
                setFormFields(defaultFormFields)
            } else {
                setError('User creation encountered an error.')
                setFormFields(defaultFormFields)
                
                console.log('User creation encountered an error', error)
            }
        }
            
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    const updateFields = () => {
        setFormFields(defaultFormFields)
    }

    useEffect(() => {
        updateFields()

    }, [currentUser])
        
   
    return (
        <Fragment>
            <SignUpFormContainer>
                <SignUpForm>
                    <h3 className='title maroon'>Don't have an account?</h3>
                    <span>Sign up with your email and password</span>

                    <form className='sign-up-form' onSubmit = { handleSubmit }>
                        <FormInput
                            type = 'text'
                            name = 'displayName'
                            value = { displayName }
                            onChange = { handleChange }
                            label = 'Display Name'
                            required
                        /> 

                        <FormInput
                            type = 'email'
                            autoComplete = 'email'
                            name = 'email'
                            value = { email }
                            onChange = { handleChange }
                            label = 'Email'
                            required
                        /> 

                        <FormInput
                            type = 'password'
                            autoComplete = 'new-password'
                            name = 'password'
                            value = {password}
                            onChange = { handleChange }
                            label = 'Password'
                            required
                        /> 

                        <FormInput
                            type = 'password'
                            autoComplete = 'new-password'
                            name = 'confirmPassword'
                            value = { confirmPassword}
                            onChange = { handleChange }
                            label = 'Confirm Password'
                            required
                        /> 
                        
                        <ButtonsContainer>
                            <CustomButton className='custom-button' type = 'submit' onSubmit = { handleSubmit }>SIGN UP</CustomButton>
                        </ButtonsContainer>
                    </form>
                </SignUpForm>
            </SignUpFormContainer>

            <GlassModal
                    show={modal}
                    close={showModal}
                    titleBG='Alert!'
                    title={error}
                    content='Please try re-entering your information.'
                />
            </Fragment>
    ) 
    
}
    

export default SignUp;
