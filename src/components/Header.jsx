import styled from 'styled-components';
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const HeaderWrapper = styled.div`
    display: flex;
    color: white;
    padding: 10px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
`;

const LeftImage = styled.img`
    width: 200px;
    height: auto;
    pointer-events: none;
    filter: ${props => props.$islighttheme ? 'brightness(1)' : 'brightness(100)'};
`;

const RightButton = styled.button`
    width: 75px;
    height: 50px;
    border: none;
    background: url('/movie.png') no-repeat center center;
    background-size: contain;
    cursor: pointer;
    align-content: center;
    line-height: 40px;
    padding: 0;
    color: ${props => props.$textColor};

    &:hover {
      transform: rotate(-20deg);
    }
    
    &:not(:disabled):hover:active {
    transform: rotate(-20deg) scale(1.05);
    }
`;

//basic header with images on both sides
function Header({toggleVisibility}) {
    const {isLightTheme, light, dark} = useContext(ThemeContext)

    return (
        <HeaderWrapper>
            <LeftImage $islighttheme={isLightTheme} src = "/logo.PNG" alt = "logo"/>
            <RightButton onClick={toggleVisibility} $textColor={isLightTheme ? light.text : dark.text}><br/>How To Play</RightButton>
        </HeaderWrapper>
    )
}
export default Header;
