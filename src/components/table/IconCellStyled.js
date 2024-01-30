import styled from "styled-components";

export const IconCellStyled = styled.div`
  padding: 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.bgColor};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
`;
