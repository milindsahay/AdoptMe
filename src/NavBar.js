import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";
const spin = keyframes`
    to{
        transform: rotate(360deg);
    }

`;
const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => {
        setPadding(padding + 15);
      }}
      css={css`
        background-color: ${colors.dark};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} infinite;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} infinite reverse;
          }
        `}
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
