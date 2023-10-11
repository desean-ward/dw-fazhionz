import React from 'react';

import Contact from '../../components/contact-us/contact-us.component';
import AnimatedPage from '../../components/animated-page/animated-page.component'


import { ContactPageContainer } from './contact.styles'

const ContactUs = () => {
    return (
        <AnimatedPage>
            <ContactPageContainer>
                <Contact />
            </ContactPageContainer>
        </AnimatedPage>
    )
}

export default ContactUs;
