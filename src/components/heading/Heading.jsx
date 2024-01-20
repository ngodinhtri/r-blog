import styled from "styled-components";
import PropTypes from "prop-types";

const HeadingStyles = styled.h2`
  width: fit-content;
  margin-top: 60px;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;

  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.strokeColor};
  }
`;

export function Heading({ children, className }) {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
