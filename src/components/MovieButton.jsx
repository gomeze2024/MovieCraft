import styled from 'styled-components';
import BubbleNav from './BubbleNav';
import PropTypes from "prop-types";
import useSWR from 'swr';
import {useState} from "react";


const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: aliceblue;
`

const Button = styled.button`
    display: flex;
    flex-direction: row;
    background: linear-gradient(to bottom, #ffffff, #eff8fd);
    border: 1.5px solid #5880a3;
    align-items: center;
    height: 70px;
    width: 160px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
        background: linear-gradient(to bottom, #ffffff, #ceebfa);
    }
`;

const ButtonImg = styled.img`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    align-self: center;
    pointer-events: none;
`

const ButtonText = styled.p`
    flex: 1;
    overflow: hidden;
    align-self: center;
    text-align: left;
    pointer-events: none;
    font-size: 14px;
    font-weight: 550;
`
const ImageColumn = styled.div`
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TextColumn = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;
const Row = styled.div`
    display: flex;
`;
const MovieButton = ({ movieId }) => {
    
    const API_KEY = '7a644baa';
    
    //for NavBubble visibility
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {
        setIsVisible(!isVisible);
    };
    //use SWR to make the api call
    const {data, error} =
        useSWR(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`,
            (url) =>
                fetch(url).then((res) => res.json())
        );
    //error handling
    if (error) return <Button>
            <Row>
                <ImageColumn>
                    <ButtonImg/>
                </ImageColumn>
                <TextColumn>
                    <ButtonText>Failed to Load</ButtonText>
                </TextColumn>
            </Row>
        </Button>;
    if (!data) return <Button>
        <Row>
            <ImageColumn>
                <ButtonImg/>
            </ImageColumn>
            <TextColumn>
                <ButtonText>Loading...</ButtonText>
            </TextColumn>
        </Row>
    </Button>;
    //toggles BubbleNav visiblity on double click
    const handleDoubleClick = () => {
        toggle();
    };

    //play audio when clicked
    const handleButtonClick = async () => {
        console.log("Button clicked!");
        const audio = new Audio('/on-click.mp3');
        await audio.play();
    };
    
    const { Title, Poster } = data;
    //function to limit the number of chatacters being displayed
    const limitText = (text, maxLength) => {
        if (text == null) {
            return "";
        } else if (text.length <= maxLength) {
            return text;
        } else {
            //when it reaches the maxlength, it will replace the rest with ...
            return text.substring(0, maxLength) + '...';
        }
    };
//limit movie title to 25 characters
    return (
        <ButtonDiv>
            <Button onClick={handleButtonClick} onDoubleClick={handleDoubleClick}>
                <Row>
                    <ImageColumn>
                        <ButtonImg src={Poster} alt="Poster"/>
                    </ImageColumn>
                    <TextColumn>
                        <ButtonText>{limitText(Title, 25)}</ButtonText>
                    </TextColumn>
                </Row>
            </Button>
            {isVisible && <BubbleNav movieTitle={Title}/>}
        </ButtonDiv>

    );
};

MovieButton.propTypes = {
    movieId: PropTypes.string.isRequired
};

export default MovieButton;

