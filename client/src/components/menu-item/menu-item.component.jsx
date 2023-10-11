import React from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
  } from "react-router-dom";
  

import { MenuItemContainer, ImageContainer, ContentContainer } from './menu-item.styles'

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
	  let location = useLocation();
	  let navigate = useNavigate();
	  let params = useParams();
	  return (
		<Component
		  {...props}
		  router={{ location, navigate, params }}
		/>
	  );
	}
  
	return ComponentWithRouterProp;
  }

/* Functional Component and destructure the props using {} */
const MenuItem = ({ title, imageUrl, linkUrl }) => {
    const navigate = useNavigate()

    return (
        <MenuItemContainer>
            
            <ImageContainer className='background-image'  style={{
                backgroundImage: `url(${imageUrl})`
            }}></ImageContainer>
        <ContentContainer className='content'
            onClick={() => navigate(`/shop/categories/${linkUrl}`)
        }>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </ContentContainer>
    </MenuItemContainer>
    )
}

/* Export modified MenuItem */
export default withRouter(MenuItem);