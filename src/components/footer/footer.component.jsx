import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useIntersection, useLocation } from 'react-use'

import gsap from 'gsap'

import { Wrapper, Container, Left, Center, Right, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment } from './footer.styles';

import { BsTwitter, BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';


const Footer = () => {
    const footerRef = useRef(null)
    const path = useLocation();

        
    const intersection = useIntersection(footerRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })
    

    useEffect(() => {
        const footer = document.querySelector('.footer')
        path.pathname == '/'
            ? footer.classList.add('shadow')
            : footer.classList.remove('shadow')

        path.pathname == '/contact'
            ? footer.classList.add('portrait')
            : footer.classList.remove('portrait')
        
    }, [path])

    
    return (
        
        <Wrapper ref={footerRef} className='footer shadow'>
            <Container className='info'>
                <Left>
                    <Title>D.W. Fazhionz</Title>

                    <Description>
                    Introducing D.W. Fazhionz, the go-to fashion store for the modern and stylish crowd. Our website features an extensive collection of on-trend clothing for both men and women. From bold graphic tees to stylish outerwear, we've got everything you need to make a fashion statement!
                    </Description>

                    <SocialContainer>
                        <SocialIcon color="385999">
                            <BsFacebook />
                        </SocialIcon>
                        <SocialIcon color="E44054">
                            <BsTwitter />
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                            <BsInstagram />
                        </SocialIcon>
                        <SocialIcon color="E60023">
                            <BsPinterest />
                        </SocialIcon>
                    </SocialContainer>
                </Left>

                <Center>
                    <Title>Links</Title>
                    <List>
                        <ListItem to='/'>Home</ListItem>
                        <ListItem to='/checkout'>Checkout</ListItem>
                        <ListItem to='/shop/categories/mens'>Mens</ListItem>
                        <ListItem to='/shop/categories/womens'>Womens</ListItem>
                        <ListItem to='/shop/categories/hats'>Hats</ListItem>
                        <ListItem to='/shop/categories/jackets'>Jackets</ListItem>
                        <ListItem to='/shop/categories/sneakers'>Sneakers</ListItem>
                        <ListItem to='#'>Wishlist</ListItem>
                    </List>
                </Center>

                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                    <FaMapMarkerAlt style={{marginRight: "10px"}} /> 
                        123 Michigan Ave 
                        Chicago, IL 60601
                    </ContactItem>
                    <ContactItem>
                        <FaPhoneAlt style={{marginRight: "10px"}} /> 
                        +1 (773) 209-1814
                    </ContactItem>
                    <ContactItem>
                        <GrMail style={{marginRight: "10px"}} />  
                        d.ward.chi@gmail.com
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                
                </Right>
            </Container>
        </Wrapper>
    )   
}

export default Footer;