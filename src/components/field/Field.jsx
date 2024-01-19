import styled from "styled-components";
import PropTypes from "prop-types";

const FieldStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

const FieldErrorStyles = styled.span`
  position: absolute;
  left: 0;
  bottom: -30px;
  display: inline-block;
  color: ${(props) => props.theme.error};
`;

export function Field({ error, children, ...props }) {
  return (
    <FieldStyles {...props}>
      {children}
      {error && <FieldErrorStyles>{error?.message}</FieldErrorStyles>}
    </FieldStyles>
  );
}

Field.propTypes = {
  error: PropTypes.object,
  children: PropTypes.node,
};
