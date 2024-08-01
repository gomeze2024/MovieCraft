import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

const StyledForm = styled.form`
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const StyledInput = styled.input`
  width: 100%;
  color: ${props => props.$textColor};
  font-size: 18px;
  padding: 15px 10px 15px 40px;
  outline: 1px solid lightgray;
  border: 0;
  border-top: 1px solid lightgray;
  background: url('https://neal.fun/infinite-craft/search.svg') no-repeat 10px center transparent;
  background-size: 22px;
`

const SearchBar = ({ searchTerm, handleFormChange, onSubmit }) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSubmit();
        }
    };

    return (
        <StyledForm>
            <label>
                <StyledInput
                    type="text"
                    name="name"
                    placeholder="Search Items"
                    value={searchTerm}
                    onKeyDown={handleSubmit}
                    onChange={handleFormChange}
                    $textColor={isLightTheme ? light.text : dark.text}
                />
            </label>
        </StyledForm>
    );
};

export default SearchBar;

SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    handleFormChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};