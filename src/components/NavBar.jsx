import styled from 'styled-components';
import NavButton from './NavButton.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 10px;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.$backgroundColor};
    align-items: center;
    justify-content: space-between;
`;

const StyledTitle = styled.h1`
    margin-left: 30%;
`;

const StyledButton = styled(NavButton)`
    margin-left: 5%;
    height: 50%;
`;

const LeftImage = styled.img`
    width: 200px;
    height: auto;
    cursor: pointer;
    filter: ${props => props.$islighttheme ? 'brightness(1)' : 'brightness(100)'};
`;

{/*
* this function presents the Nav Bar in movie details page
* and contains a button for us to go back to movie craft page.
* {goBack && <StyledButton onClick={goBack}>{`< Go Back`}</StyledButton>}
*/}

export default function NavBar({goBack}) {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <StyledWrapper $backgroundColor={theme.bg} $textColor={theme.text}>
            {goBack && <LeftImage $islighttheme={isLightTheme} src={"/logo.png"} alt="Go Back" onClick={goBack} />}
        </StyledWrapper>
    )
}