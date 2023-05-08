import styled from 'styled-components'


export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 250px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 7.5px 15px;
    overflow: hidden;
    background-color: white;

    &:hover {
        .background-image {
            transform: scale(1.1);
        }

        .content {
          opacity: 0.9;
          cursor: pointer;
        }
    }

    @media (width < 1440px) {
        .content {
          opacity: 0.9;
          cursor: pointer;
        }

    }

    @media (width <= 800px) {
      height: 200px;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    opacity: 0.5;
    position: absolute;

    :hover {
      .title { color: maroon; }
    }

    .title {
      font-weight: bolder;
      margin-bottom: 10px;
      font-size: 24px;
      color: #4a4a4a;

      @media (width < 1440px) {
        color: maroon;
      }
    }

    .subtitle {
      font-size: 16px;
    }
    
`