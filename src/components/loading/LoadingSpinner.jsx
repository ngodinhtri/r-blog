import styled from "styled-components";
import PropTypes from "prop-types";

const LoadingSpinnerStyles = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border: ${(props) => props.size}px solid
    ${(props) => props.theme.headLineColor};
  border-top: ${(props) => props.size}px solid transparent;
  border-bottom: ${(props) => props.size}px solid transparent;
  border-radius: 100rem;
  display: inline-block;
  animation: spinner 1s infinite linear;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function LoadingSpinner({ width = 30, size = 5 }) {
  return <LoadingSpinnerStyles width={width} size={size} />;
}

LoadingSpinner.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
