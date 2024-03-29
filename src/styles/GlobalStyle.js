import { createGlobalStyle } from "styled-components";
import { GlobalClasses } from "@/styles/GlobalClasses.js";

export const GlobalStyles = createGlobalStyle`
    ${GlobalClasses}
    body {
        background-color: ${(props) => props.theme.bgColor};
        font-family: 'Noto Sans', sans-serif;
        color: ${(props) => props.theme.textColor};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.headLineColor};
    }

    p, span {
        color: ${(props) => props.theme.textColor};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.tertiary};
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;
