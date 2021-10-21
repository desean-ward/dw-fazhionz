import React from 'react';

import Contact from '../../components/contact-us/contact-us.component';

import { ContactPageContainer } from './contact.styles'

const ContactPage = () => {
    return (
        <ContactPageContainer>
            <Contact />
        </ContactPageContainer>
    )
}

export default ContactPage;
