import styled from "styled-components";

const PostChapterStyles = styled.div`
  margin-top: 35px;

  h4 {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 25px;
  }
`;

export default function PostChapter({ title, children }) {
  return (
    <PostChapterStyles>
      <h4>{title}</h4>
      {children}
    </PostChapterStyles>
  );
}
