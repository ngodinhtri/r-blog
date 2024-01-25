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
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
  }

  //    MATERIAL UI

  .MuiMenu-list {
    background: ${(props) => props.theme.bgColor};
    border-radius: 8px;
    color: ${(props) => props.theme.headLineColor};

    & .MuiListItemIcon-root {
      color: currentColor;
    }

    a {
      color: currentColor;
    }
  }
`;
