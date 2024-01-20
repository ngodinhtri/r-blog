import styled from "styled-components";
import { LoadingSpinner } from "@/components/loading/index.js";
import PropTypes from "prop-types";

const ButtonStyles = styled.button`
  height: ${(props) => props.height || "54px"};
  width: ${(props) => props.width || "100%"};
  font-size: 24px;
  font-weight: 600;
  line-height: 1;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
`;

export function Button({ isLoading, disabled, children, ...props }) {
  return (
    <ButtonStyles
      disabled={isLoading || disabled}
      {...props}
      className={"button"}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </ButtonStyles>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
