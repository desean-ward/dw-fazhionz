import React from 'react';

import { Container, Left, Center, Right, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment } from './footer.styles';

import { BsTwitter, BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';




const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>D.W. Fazhionz</Logo>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ipsa molestiae accusamus quos? Sunt consequatur omnis nemo harum quo culpa atque aperiam delectus sit fugiat itaque sapiente odio natus, nihil cum? Illum accusantium aperiam accusamus? Voluptate quo consequuntur vitae sunt quos adipisci ex consectetur animi mollitia autem! Ipsum, eligendi sequi?                
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
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <FaMapMarkerAlt style={{marginRight: "10px"}} /> 
                    123 Michigan Avenue, Chicago, Illinois 60601
                </ContactItem>
                <ContactItem>
                    <FaPhoneAlt style={{marginRight: "10px"}} /> 
                    +1 (312) 123-1234
                </ContactItem>
                <ContactItem>
                    <GrMail style={{marginRight: "10px"}} />  
                     desean-ward@dw-fazhionz.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            
            </Right>
        
        </Container>
    )   
}

export default Footer;