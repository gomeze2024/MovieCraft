import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    padding: 20px;
    justify-content: center;
    overflow-y: auto;
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
`;

const StyledTitle = styled.h1`
    margin-bottom: 25px;
    color: ${props => props.$textColor};
`;

const StyledP = styled.p`
    margin-bottom: 18px;
    color: ${props => props.$textColor};
`;

const StyledLabel = styled.span`
    font-weight: bold;
    margin-right: 5px;
    color: ${props => props.$textColor};
`;

const StyledImage = styled.img`
    width: 45%;
    height: auto;
    margin-right: 20px;
    max-width: 400px;
    position: relative;
`;

const StyledPlot = styled.p`
    margin: 10px;
    text-align: left;
    color: ${props => props.$textColor};
`;

export default function MovieDetails({ movie }) {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <StyledDiv $backgroundColor={theme.bg} $textColor={theme.text}>
            <StyledImage src={movie.Poster} alt={'Movie Poster'} />
            <StyledCard $outlineColor={theme.outline}>
                <StyledTitle $textColor={theme.text}>{movie.Title}</StyledTitle>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Year:</StyledLabel>{movie.Year}</StyledP>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Genre: </StyledLabel>{movie.Genre}</StyledP>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Country: </StyledLabel>{movie.Country}</StyledP>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Language: </StyledLabel>{movie.Language}</StyledP>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Director: </StyledLabel>{movie.Director}</StyledP>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Writer: </StyledLabel>{movie.Writer}</StyledP>
                <StyledP $textColor={theme.text}><StyledLabel $textColor={theme.text}>Actors: </StyledLabel>{movie.Actors}</StyledP>
                <StyledPlot $textColor={theme.text}><StyledLabel $textColor={theme.text}>Plot: </StyledLabel>{movie.Plot}</StyledPlot>
            </StyledCard>
        </StyledDiv>
    );
}
