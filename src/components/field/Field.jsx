import styled from "styled-components";
import PropTypes from "prop-types";

const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

export function Field({ children, ...props }) {
  return <FieldStyles {...props}>{children}</FieldStyles>;
}

Field.propTypes = {
  children: PropTypes.node,
};
