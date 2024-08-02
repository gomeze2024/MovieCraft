import React, {useContext, useState} from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import {ThemeContext} from "../context/ThemeContext.jsx";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledModal = styled.div`
    font-size: 12px;
    padding: 20px 10px 20px 10px;
    align-items: center;
`;

const StyledHeader = styled.div`
    width: 100%;
    font-size: 24px;
    text-align: center;
    padding-bottom: 10px;
    color: ${props => props.$textColor};
`;

const StyledDescription = styled.div`
    width: 100%;
    font-size: 16px;
    color: gray;
    text-align: center;
    padding-bottom: 10px;
`;

const StyledContent = styled.div`
    width: 100%;
    font-size: 14px;
    line-height: 25px;
    height: 100%;
    color: gray;
`;

const StyledInstructions = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 45px 45px 45px;
    color: gray;
`;

const StyledClose = styled.button`
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: ${props => props.$buttonColor};
    border-radius: 18px;
    border: 1px solid #cfcece;
    color: ${props => props.$textColor};
`;

const StyledSlide = styled(SwiperSlide)`
    width: 100%;
`;

const StyledLabel = styled.label`
    padding: 0 45px 45px 45px;
`;

const Checkbox = styled.input`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;


const InstructionsPopup = ({isVisible, toggleVisibility}) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const [isChecked, setIsChecked] = useState(false);

    const toggleIsChecked = () => {
        setIsChecked(!isChecked);
        localStorage.setItem('instructions', JSON.stringify(isChecked));
    };

    return (
        <Popup
            open={isVisible}
            contentStyle={{
                width: "90%",
                maxWidth: "800px",
                backgroundColor: isLightTheme ? light.bg : dark.bg,
                outline: "1px solid gray"}}
            onClose={toggleVisibility}
        >
            {close => (
                <StyledModal>
                    <StyledClose $textColor={isLightTheme ? light.text : dark.text} $buttonColor={isLightTheme ? light.bg : dark.bg} onClick={close}>
                        &times;
                    </StyledClose>
                    <StyledHeader $textColor={isLightTheme ? light.text : dark.text}>How To Play</StyledHeader>
                    <StyledContent>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, A11y]}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <StyledSlide>
                                <StyledDescription>Adding Series</StyledDescription>
                                <StyledInstructions>
                                    Look up a show in the search bar and press enter or click the plus button.<br/>
                                    Click on these shows to add buttons to the game screen.<br/><br/>
                                    <img src="/adding-series.gif" alt="GIF" style={{ width: '80%', height: 'auto' }} />
                                </StyledInstructions>
                            </StyledSlide>
                            <StyledSlide>
                                <StyledDescription>Crafting Series</StyledDescription>
                                <StyledInstructions>
                                    To craft a new show, overlap any two buttons on the game screen.<br/><br/>
                                    <img src="/crafting-series.gif" alt="GIF" style={{ width: '80%', height: 'auto' }} />
                                </StyledInstructions>
                            </StyledSlide>
                            <StyledSlide><StyledDescription>Other</StyledDescription>
                                <StyledInstructions>
                                    Double click to open the more details tab.<br/> Left click to delete buttons from screen.<br/><br/>
                                    <img src="/details-deleting.gif" alt="GIF" style={{ width: '80%', height: 'auto' }} />
                                </StyledInstructions>
                            </StyledSlide>
                        </Swiper>
                        <StyledLabel>
                            <Checkbox
                                type="checkbox"
                                checked={isChecked}
                                onChange={toggleIsChecked}
                            />
                            Never show this again
                        </StyledLabel>
                    </StyledContent>
                </StyledModal>
            )}
        </Popup>
    );
};

export default InstructionsPopup;