import styled, { keyframes } from 'styled-components';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const slideUp = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 10px;
    justify-content: center;
    overflow-y: visible;
    background-color: ${props => props.$backgroundColor};
    color: ${props => props.$textColor};
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.$outlineColor};
    border-radius: 5%;
    width: 50%;
    padding: 5px 20px 45px 20px;
    text-align: center;
    position: relative;
    z-index: 2;
`;

const StyledTitle = styled.h1`
    margin-bottom: 25px;
    color: ${props => props.$textColor};
    position: relative;
    z-index: 3;
`;

const StyledP = styled.p`
    margin-bottom: 18px;
`;

const StyledLabel = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

const StyledImage = styled.img`
    width: 45%; 
    height: auto; 
    margin-right: 20px;
    max-width: 400px;
    animation: ${slideUp} 1s ease-out;
    transition: transform 1s ease, filter 0.1s ease, opacity 0.3s ease;
    z-index: 1;
    position: relative;
`;

const StyledPlot = styled.p`
    margin: 10px;
    text-align: left;
    color: ${props => props.$textColor};
`;

{/*
* Given the input movie, this function presents its poster and more details.
*/}
export default function MovieDetails({movie}) {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const imageRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current && titleRef.current) {
                const scrollY = window.scrollY;
                const scaleValue = 1 + scrollY / 1000;
                const blurValue = Math.min(scrollY / 100, 100);
                const newWidth = Math.min(imageRef.current.naturalWidth * scaleValue, 800);
                const opacityValue = Math.max(1 - scrollY / 500, 0);

                imageRef.current.style.transform = `scale(${newWidth / imageRef.current.naturalWidth})`;
                imageRef.current.style.filter = `blur(${blurValue}px)`;
                imageRef.current.style.opacity = opacityValue;
                titleRef.current.style.transform = `translateY(-${scrollY * 4}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <StyledDiv $backgroundColor={theme.bg} $textColor={theme.text}>
                <StyledImage ref={imageRef} src={movie.Poster} alt={'Movie Poster'}/>
            </StyledDiv>
            <StyledDiv $backgroundColor={theme.bg} $textColor={theme.text}>
                <StyledCard $outlineColor={theme.outline}>
                    <StyledTitle ref={titleRef} $textColor={theme.text}>{movie.Title}</StyledTitle>
                    {/*
                    <StyledP><StyledLabel>Year:</StyledLabel>{movie.Year}</StyledP>
                    <StyledP><StyledLabel>Genre: </StyledLabel>{movie.Genre}</StyledP>
                    <StyledP><StyledLabel>Country: </StyledLabel>{movie.Country}</StyledP>
                    <StyledP><StyledLabel>Language: </StyledLabel>{movie.Language}</StyledP>
                    <StyledP><StyledLabel>Director: </StyledLabel>{movie.Director}</StyledP>
                    <StyledP><StyledLabel>Writer: </StyledLabel>{movie.Writer}</StyledP>
                    <StyledP><StyledLabel>Actors: </StyledLabel>{movie.Actors}</StyledP>
                    <StyledPlot><StyledLabel>Plot: </StyledLabel>{movie.Plot}</StyledPlot>
                    */}
                </StyledCard>
            </StyledDiv>
        </>
    );
}