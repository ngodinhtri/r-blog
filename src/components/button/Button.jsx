import styled from "styled-components";
import { LoadingSpinner } from "@/components/loading/index.js";
import PropTypes from "prop-types";

const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.theme.height || "54"}px;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.headLineColor};
  padding: 0 20px;
  cursor: pointer;
  border-radius: 8px;
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
    <ButtonStyles disabled={isLoading || disabled} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </ButtonStyles>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
