import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as themeActions from 'actions/themeActions';

import ReactColor from './ReactColor';

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.default};
`;

function ToggleTheme({ theme, toggleColor, changeColor }) {
  const [themeColor, setThemeColor] = useState(theme.color);
  // const [themeTypography, setThemeTypography] = useState(themeTypography);

  return (
    <StyledDiv>
      <label htmlFor="currentColor">Current Color</label>
      <div id="currentColor">{theme.color}</div>
      <label htmlFor="changeColor">Change Color</label>
      <input
        type="text"
        id="changeTheme"
        name="changeTheme"
        value={`${themeColor}`}
        onChange={(event) => {
          setThemeColor(event.target.value);
        }}
      />
      <StyledButton name="changeColor" onClick={() => changeColor(themeColor)}>
        Submit
      </StyledButton>

      <br />

      <label htmlFor="toggleColor">Toggle Color</label>
      <StyledButton name="toggleColor" onClick={toggleColor}>
        Toggle Color
      </StyledButton>

      <br />

      <ReactColor />
    </StyledDiv>
  );
}

function mapStateToProps(state) {
  return { theme: state.theme };
}

export default connect(mapStateToProps, themeActions)(ToggleTheme);
