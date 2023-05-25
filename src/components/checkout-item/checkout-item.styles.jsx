import styled from 'styled-components'

export const ItemContainer = styled.div`
    //position: relative;
	width: 100%;
    //height: 50%;
	display: flex;
	padding: 0.5em 0;
	//font-size: 20px;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;

    .sect {
        //position: relative;
        display: flex;
        width: 25%;
        //margin-left: 0;
        align-items: center;

        :last-child {
            width: 12%;

        }
    }

    &:hover, &:active {
    background-color: rgba(0, 0, 0, .05);
    }  

    &:last-child {
        //border-bottom: 1px solid darkgrey;
    }

    @media (orientation: portrait) {
        //font-size: 19px;
        //width: 95%;
    }

    @media only screen and (max-width: 900px) {
        //padding-right: 5px;
    }
`

export const ImageContainer = styled.div`
    width: 12.5%;
    height: 125px;
    //padding-right: 15px;
    //height: 100px;
    object-fit: stretch;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: stretch;
        overflow: hidden;
    }
`

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.5em;
    padding-left: 7.5em;

   
    // @media only screen and (max-width: 600px) {
    //     display: grid;
    //     grid-template-columns: 1fr auto;
    //     grid-template-areas: 
    //         '  name      remove '
    //         '  quantity  price ';
    //     gap: 10px;

    //     width: 100%;

    //     .name { width: 100%; }
    //     .remove-button, .price { 
    //         justify-self: right;
    //         margin-right: 10px; 
    //     }
    //     .price { margin-right: 26px; }
    // }
`

export const Name = styled.span`
    grid-area: name;
    //width: 28%;

    @media only screen and (max-width: 800px) {
        //font-size: 16px;
    }
`

export const Quantity = styled.span`
    grid-area: quantity;
    //position: relative;
    //width: 25%;
    //left: 25px;
    display: flex;
    margin-left: -1.25em;
    //height: 22px;

    @media (width <= 700px) {
        margin-left: -2em;
    }

    .arrow {
      cursor: pointer;
      border: 1px solid darkgrey;
      display: flex;

      @media (width <= 700px) {
        display: none;
      }
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
`

export const Price = styled.span`
    grid-area: price;
    padding: 0 0.5em;
    margin: 0 auto;
`

export const RemoveBtn = styled.div`
    grid-area: remove;
    //width: 20%;
    text-align: center;
    margin-right: 0.5em;
    cursor: pointer;

    .trash-icon {
        width: 30px;
        height: 30px;
        
    }

    &:hover {
      color: maroon;
    }
`