import styled from "styled-components";
import { LoadingSpinner } from "@/components/loading";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonStyles = styled.button`
  height: ${(props) => props.height || "54px"};
  width: ${(props) => props.width || "100%"};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
`;

export function Button({ to, isLoading, disabled, children, ...props }) {
  if (to) {
    return (
      <Link to={to}>
        <ButtonStyles
          disabled={isLoading || disabled}
          {...props}
          className={"button"}
        >
          {isLoading ? <LoadingSpinner /> : children}
        </ButtonStyles>
      </Link>
    );
  }
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
  to: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
