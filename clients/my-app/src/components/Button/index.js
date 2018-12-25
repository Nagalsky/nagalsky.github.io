import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

class Button extends React.Component {
  render() {
    return (
      <button
        css={css`
          border-radius: 4px;
          background-color  red;
        `}
      >
        fwfwfw
      </button>
    );
  }
}

export default Button;