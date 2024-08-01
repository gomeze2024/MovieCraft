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

const RightImage = styled.img`
    width: 50px;
    height: auto;
    pointer-events: none;
`;
//basic header with images on both sides
function Header() {
    const {isLightTheme} = useContext(ThemeContext)

    return (
        <HeaderWrapper>
            <LeftImage $islighttheme={isLightTheme} src = "/logo.png" alt = "logo"/>
            <RightImage src = "/movie.png" alt = "movie"/>
        </HeaderWrapper>
    )
}
export default Header;
