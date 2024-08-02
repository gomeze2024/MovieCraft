import styled from "styled-components"
import DraggableScreen from "../components/DraggableScreen.jsx";
import useMovieManager from "../hooks/useMovieManager.jsx";
import Header from "../components/Header.jsx";
import RateLimitPopup from "../components/RateLimitPopup.jsx"
import {useContext, useState} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";
import InstructionsPopup from "../components/InstructionsPopup.jsx";
import {ApiContext} from "../context/ApiContext.jsx";

/*
   Game Screen manages holds the main game screen, the sidebar, and header. A good chunk of the
   logic is within the Draggable Screen, so there's global comments there too.
*/

const Screen = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.$backgroundColor || 'white'};
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const MainScreen = styled.div`
    height: 100%;
    width: 75%;
    position: relative;
    
    @media screen and (max-width: 900px) {
    height: 75%;
    width: 100%;
    }
`;

const ResetButton = styled.button`
  background: transparent;
  backface-visibility: hidden;
  border-color: gray;
  border-radius: .375rem;
  border-style: solid;
  border-width: .125rem;
  box-sizing: border-box;
  color: gray;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:not(:disabled):hover {
    transform: scale(1.05);
  }

  &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(.125rem);
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    content: "";
    left: calc(-1*.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1*.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:focus:not(:focus-visible):before {
    border-width: 0;
  }
`;

const ThemeButton = styled.button`
    height: 40px;
    width: 40px;
    border: 0;
    background: transparent;
    backface-visibility: hidden;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -.01em;
    line-height: 1.3;
    padding: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-align: left;
    text-decoration: none;
    transform: translateZ(0) scale(1);
    transition: transform .2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    background: url('/theme-button.png') no-repeat center center;
    background-size: contain;
    filter: ${props => props.$islighttheme ? 'brightness(1)' : 'brightness(100)'};
    
    &:not(:disabled):hover {
        transform: scale(1.05);
    }
    
    &:not(:disabled):hover:active {
        transform: scale(1.05) translateY(.125rem);
    }
    
    &:focus {
        outline: 0 solid transparent;
    }
    
    &:focus:before {
        content: "";
        left: calc(-1*.375rem);
        pointer-events: none;
        position: absolute;
        top: calc(-1*.375rem);
        transition: border-radius;
        user-select: none;
    }
    
    &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
    }
    
    &:focus:not(:focus-visible):before {
    border-width: 0;
    }
`;

export default function GameScreen() {
    const {clearMovies} = useMovieManager();
    const {isLightTheme, toggleTheme, light, dark} = useContext(ThemeContext)
    const checked = JSON.parse(localStorage.getItem('instructions'));
    const [instructionsVisible, setInstructionsVisible] = useState(isTrue(checked));

    const resetGame = async () => {
        await clearMovies();
    };

    const toggleInstructionsVisibility = () => {
        setInstructionsVisible(!instructionsVisible);
    };

    function isTrue(str) {
        return str === null || str === true;
    }

    return (
        <Screen $backgroundColor={isLightTheme ? light.bg : dark.bg}>
            <MainScreen>
                <Header toggleVisibility={toggleInstructionsVisibility}/>
                <ResetButton onClick={resetGame}>
                    Reset
                </ResetButton>
                <ThemeButton onClick={toggleTheme} $islighttheme={isLightTheme}/>
                <InstructionsPopup isVisible={instructionsVisible} toggleVisibility={toggleInstructionsVisibility}/>
                <RateLimitPopup/>
            </MainScreen>
            <DraggableScreen/>
        </Screen>
    );
}