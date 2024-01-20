import styled from "styled-components";
import PropTypes from "prop-types";

const PostTagStyles = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  place-content: center;
  background: ${(props) => props.theme.secondary};
  font-size: 14px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
`;

export default function PostTag({ children, className = "" }) {
  return (
    <PostTagStyles className={`post-tag ${className}`}>
      {children}
    </PostTagStyles>
  );
}

PostTag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
