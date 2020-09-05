import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as theme from 'actions/theme';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.default};
`;

function ToggleTheme(props) {
  const [themeInput, setThemeInput] = useState(props.theme);

  return (
    <div>
      <label htmlFor="currentTheme">Current Theme</label>
      <div id="currentTheme">{props.theme}</div>
      <label htmlFor="changeTheme">Change Theme</label>
      <input
        type="text"
        id="changeTheme"
        name="changeTheme"
        value={`${themeInput}`}
        onChange={(event) => {
          setThemeInput(event.target.value);
        }}
      />
      <StyledButton
        name="changeTheme"
        onClick={() => {
          props.changeTheme(themeInput);
        }}
      >
        Submit
      </StyledButton>

      <br />

      <label htmlFor="toggleTheme">Toggle Theme</label>
      <StyledButton
        name="changeTheme"
        onClick={() => props.toggleDefaultTheme(props.theme)}
      >
        Toggle Theme
      </StyledButton>
    </div>
  );
}

function mapStateToProps(state) {
  return { theme: state.theme };
}

export default connect(mapStateToProps, theme)(ToggleTheme);
