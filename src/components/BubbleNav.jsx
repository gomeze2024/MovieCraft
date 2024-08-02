import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const StyledBubble = styled.div`
    padding: 8px;
    border-left: ${props =>
        `1.5px solid ${props.$outlineColor}`};
    border-right: ${props =>
            `1.5px solid ${props.$outlineColor}`};
    border-bottom: ${props =>
            `1.5px solid ${props.$outlineColor}`};
    border-radius: 0 0 5px 5px;
    z-index: 1;
    background-color: ${props => props.$backgroundColor};
    font-weight: 550;
    font-size: 14px;
`;

const StyledP = styled.p `
    color: ${props => props.$textColor};
  
    &:hover {
        color: ${props => props.$hoverColor};
        text-decoration: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    pointer-events: auto;
    user-select: none;
    -webkit-user-drag: none;
`;
{/*
takes in a title given by MovieButton and
navigate to MovieDetails with the title
*/}

const BubbleNav = ({ movieTitle }) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)

    return (
        <div> 
            <StyledBubble
                $backgroundColor={isLightTheme ? light.secondary : dark.secondary }
                $outlineColor={isLightTheme ? light.outline : dark.outline }
                >
                <StyledNavLink to={{ pathname: '/Movies', search: `?movieName=${movieTitle}`}}>
                    <StyledP $textColor={isLightTheme ? light.text : dark.text} $hoverColor={isLightTheme ? dark.secondary : light.secondary }>More Details</StyledP>
                </StyledNavLink>
            </StyledBubble>
        </div>
    );
}

export default BubbleNav;
