import styled from 'styled-components'

export const ItemContainer = styled.div`
    position: relative;
	width: 100%;
	display: flex;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
	justify-content: space-between;
	transition: all 0.3s ease-in-out;

    &:hover, &:active {
    background-color: rgba(0, 0, 0, .05);
    }  

    &:last-child {
        border-bottom: 1px solid darkgrey;
    }

    @media only screen and (orientation: portrait) {
        font-size: 19px;
    }

    @media only screen and (max-width: 900px) {
        padding-right: 5px;
    }
`;

export const ImageContainer = styled.div`
    width: 20%;
    padding-right: 15px;
    height: 100px;

    img {
        height: 100%;
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
   
    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas: 
            '  name      remove '
            '  quantity  price ';
        gap: 10px;

        width: 100%;

        .name { width: 100%; }
        .remove-button, .price { 
            justify-self: right;
            margin-right: 10px; 
        }
        .price { margin-right: 26px; }
    }
`

export const Name = styled.span`
    grid-area: name;
    width: 28%;

    @media only screen and (max-width: 800px) {
        font-size: 16px;
    }
`;

export const Quantity = styled.span`
    grid-area: quantity;
    position: relative;
    width: 25%;
    left: 25px;
    display: flex;
    height: 22px;

    .arrow {
      cursor: pointer;
      border: 1px solid darkgrey;
      display: flex;
    }

    .value {
      display: flex;
      text-align: center;
      margin: 0 15px;
      width: 60px;
      background-color: white;
    }

    @media only screen and (min-width: 700px) {
        top: 6px;
    }

    @media only screen and (max-width: 600px) {
        left: 0;
    }
`;

export const Price = styled.span`
    grid-area: price;
    text-align: right;
    width: 20%;
    left: 20px;
`;

export const RemoveBtn = styled.div`
    grid-area: remove;
    width: 20%;
    text-align: right;
    cursor: pointer;

    .trash-icon {
        width: 30px;
        height: 30px;
        
    }

    &:hover {
      color: maroon;
    }
`;