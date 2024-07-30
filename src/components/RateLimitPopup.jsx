import React, {useContext} from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import {ApiContext} from "../context/ApiContent.jsx";

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
    color: gray;
    padding: 0 10px 0 10px;
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
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
`;

const StyledForm = styled.form`
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    align-content: center;
    justify-content: center;
    padding-top: 10px;
`;

const StyledInput = styled.input`
    width: 75%;
    padding: 5px;
    margin-bottom: 5px;
`;

const StyledButton = styled.button`
    width: 75%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient(135deg, #6b87ed 40%, #6dd5f7);
    color: white;
    padding: 7px;
    border: 0;
    &:active {
    transform: scale(0.96);
    }
`;

const RateLimitPopup = () => {
    const {key, setKey, showPopup, setShowPopup} = useContext(ApiContext);

    const handleChange = event => {
        console.log("ooda ooda")
        setKey(event.target.value);
    };

    return (
        <Popup
            open={showPopup}
            contentStyle={{
                width: "90%",
                maxWidth: "800px"}}
            onClose={() => setShowPopup(false)}
        >
            {close => (
                <StyledModal>
                    <StyledClose onClick={close}>
                        &times;
                    </StyledClose>
                    <StyledHeader> Rate Limit Reached.</StyledHeader>
                    <StyledDescription>You’ll need your own OpenAPI key to continue.</StyledDescription>
                    <StyledContent>
                        Enter the key yourself.
                        <br/>
                        1. Clone the GitHub project.
                        <br/>
                        2. Create .env file with OPENAI_KEY="your key"
                        <br/><br/>
                        <b>OR</b> Enter the key here. We do not access your data.
                        <StyledForm>
                            <label>
                                <StyledInput
                                    type="text"
                                    name="name"
                                    placeholder="API Key"
                                    value={key}
                                    onChange={handleChange}
                                />
                            </label>
                            <StyledButton
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >Enter
                            </StyledButton>

                        </StyledForm>

                    </StyledContent>
                </StyledModal>
            )}
        </Popup>
    );
};

export default RateLimitPopup;