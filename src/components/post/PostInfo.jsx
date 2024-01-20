import styled from "styled-components";
import PropTypes from "prop-types";

const PostInfoStyles = styled.div``;

export default function PostInfo({
  date = "Month 00",
  author = "Author",
  className = "",
}) {
  return (
    <PostInfoStyles className={`post-info ${className}`}>
      {date} • {author}
    </PostInfoStyles>
  );
}

PostInfo.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  className: PropTypes.string,
};
