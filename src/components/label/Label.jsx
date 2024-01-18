import styled from "styled-components";
import PropTypes from "prop-types";

const LabelStyles = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export function Label({ htmlFor = "", children, ...props }) {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};
