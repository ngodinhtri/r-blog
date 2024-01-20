import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1;

  ${(props) => {
    let size;
    switch (props.$size) {
      case "l":
        size = "22px";
        break;
      default:
        size = "18px";
    }

    return css`
      font-size: ${size};
    `;
  }}
`;

export default function PostTitle({ size = "md", children, className = "" }) {
  return (
    <PostTitleStyles className={`post-title ${className}`} $size={size}>
      {children}
    </PostTitleStyles>
  );
}

PostTitle.propTypes = {
  size: PropTypes.oneOf(["md", "l"]),
  children: PropTypes.node,
  className: PropTypes.string,
};
