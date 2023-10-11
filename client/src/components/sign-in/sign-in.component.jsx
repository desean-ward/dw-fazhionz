import React, { useState, useContext, Fragment } from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import GlassModal from "../glass-popup/glass-popup.component";

import { ErrorMessageContainer, SignInContainer } from "./sign-in.styles";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

const defaultFormFields = {
  email: "",
  password: "",
};

/* Create a class component to store state */
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(null);
  const { email, password } = formFields;

  const showModal = () => {
    setModal(!modal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      /* Clear out the state */
      setFormFields(defaultFormFields);
      setError(null);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setError("Incorrect password for email.");
          // showModal();
          setFormFields((prevFormFields) => ({
            ...prevFormFields,
            password: "",
          }));
          console.log("ERROR: " + error);
          break;
        case "auth/user-not-found":
          setError("User not found.");
          // showModal();
          setFormFields(defaultFormFields);
          console.log("ERROR: " + error);
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          // showModal();
          setFormFields(defaultFormFields);
          console.log("ERROR: " + error);
          break;
        default:
          console.log("ERROR: " + error);
      }
    }
  };

  const googleSignIn = async () => {
    // Retrieve the user from the Google popup
    await signInWithGooglePopup();
  };

  /* Handles the change of Input  AND password fields*/
  const handleChange = (event) => {
    /* Pull value and name off of target */
    const { value, name } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <SignInContainer>
        <h3 className='maroon'>Have an account?</h3>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={handleChange}
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={handleChange}
            required
          />

          <div className='buttons'>
            <CustomButton className='custom-button' type='submit'>
              Sign In
            </CustomButton>

            <CustomButton buttonType='google' onClick={googleSignIn}>
              {" "}
              <div className='logo'>
                <img src='../../images/google.png' alt='Google' />
              </div>
              Google{" "}
            </CustomButton>
          </div>
        </form>
        <ErrorMessageContainer>
          <p>{error}</p>
        </ErrorMessageContainer>
      </SignInContainer>

      <GlassModal
        show={modal}
        close={showModal}
        titleBG='Alert!'
        title={error}
        content='Please verify that the information is correct.'
      />
    </Fragment>
  );
};

export default SignIn;
