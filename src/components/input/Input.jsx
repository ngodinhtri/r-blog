import styled from "styled-components";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const InputStyles = styled.div`
    display: flex;
    height: 54px;
    align-items: center;
    border: transparent 2px solid;
    border-radius: 8px;
    background: ${(props) => props.theme.mainColor};

    &:has(input:focus) {
        border-color: ${(props) => props.theme.strokeColor};
    }

    input {
        flex: 1;
        width: 100%;
        background: transparent;
        color: ${(props) => props.theme.headLineColor};
        padding: 15px 25px;
        font-weight: 500;
    }

    input::-ms-reveal,
    input::-ms-clear {
        display: ${(props) => (props.$hasIcon ? "none" : "unset")}
`;

const InputIconStyles = styled.div`
  & > * {
    margin-right: 25px;
    width: 40px;
    height: 40px;
  }
`;

export function Input({ name, type = "text", children, ...props }) {
  return (
    <InputStyles $hasIcon={!!children}>
      <input type={type} id={name} {...props} />
      <InputIconStyles>{children}</InputIconStyles>
    </InputStyles>
  );
}

export function InputForm({
  name,
  type = "text",
  control,
  children,
  ...props
}) {
  const { field } = useController({ name, control, defaultValue: "" });

  return (
    <InputStyles $hasIcon={!!children}>
      <input type={type} id={name} {...field} {...props} />
      <InputIconStyles>{children}</InputIconStyles>
    </InputStyles>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

InputForm.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.object,
  children: PropTypes.node,
};
