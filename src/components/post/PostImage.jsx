import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import PostQuote from "@/components/post/PostQuote.jsx";

const PostImageStyles = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => {
    let size;
    switch (props.size) {
      case "xl":
        size = "430px";
        break;
      case "l":
        size = "300px";
        break;
      case "sm":
        size = "150px";
        break;
      default:
        size = "200px";
    }

    return css`
      height: ${size};
    `;
  }};
`;

export default function PostImage({
  size = "md",
  url,
  alt = "post image",
  className = "",
}) {
  return (
    <PostImageStyles size={size} className={`post-image ${className}`}>
      <img src={url} alt={alt} />
    </PostImageStyles>
  );
}

PostImage.propTypes = {
  size: PropTypes.oneOf(["xl", "l", "md", "sm"]),
  url: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
