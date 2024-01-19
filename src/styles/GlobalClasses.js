import { css } from "styled-components";

export const GlobalClasses = css`
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 54px;
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.headLineColor};
    padding: 0 20px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
  }
`;
