import styled from "styled-components";

const PostImageNoteStyles = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  margin: 20px 0;
`;

export default function PostQuote({ children }) {
  return <PostImageNoteStyles>{children}</PostImageNoteStyles>;
}
