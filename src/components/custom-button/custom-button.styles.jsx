import styled, {css} from 'styled-components'


const googleSignInStyles = css`
    
    background-color: #4285f4;
    color: white;
        &:hover {
            background-color: #357ae8;
            border: none;
            color: white;
        }
`;

const invertedStyles = css`
    background-color: black;
    color: white;
    border: none;
        &:hover{
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    }
`;

const addToCartButtonStyles = css`
    display: flex;
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
`;

const getButtonStyles = props => {
    if (props.googleSignIn)
        return googleSignInStyles
    return props.inverted && invertedStyles
}
const getAddToCartButtonStyles = (props) =>{
    return props.addToCart && addToCartButtonStyles
} 

export const CustomButtonContainer = styled.button`

    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  
        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }

   ${getButtonStyles}
   ${getAddToCartButtonStyles}

   


`;