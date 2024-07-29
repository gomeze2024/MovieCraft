import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const StyledBubble = styled.div`
    width: 70%;
    padding: 5px;
    border-left: 1.5px solid #5880a3;
    border-right: 1.5px solid #5880a3;
    border-bottom: 1.5px solid #5880a3;
    border-radius: 0 0 5px 5px;
    z-index: 1;
    background-color: #e8f4fa;
    font-weight: 550;
    font-size: 15px;
`;

const StyledP = styled.p `
    color: black;
    &:hover {
        color: blue;
        text-decoration: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;
{/*
takes in a title given by MovieButton and
navigate to MovieDetails with the title
*/}

const BubbleNav = ({ movieTitle }) => {
    return (
        <div> 
            <StyledBubble>
                <StyledNavLink to={{ pathname: '/Movies', search: `?movieName=${movieTitle}`}}>
                    <StyledP>More Details</StyledP>
                </StyledNavLink>
            </StyledBubble>
        </div>
    );
}

export default BubbleNav;
