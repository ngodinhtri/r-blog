import styled from "styled-components";
import PostImage from "@/components/post/PostImage.jsx";
import PostTitle from "@/components/post/PostTitle.jsx";
import PropTypes from "prop-types";

const CalloutStyles = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 8px;
  color: ${(props) => props.theme.bgColor};
  margin-top: 30px;

  .content {
    padding: 20px;

    & .post-title {
      color: ${(props) => props.theme.mainColor};
      margin-bottom: 10px;
    }
  }
`;

export default function Callout({
  title,
  urlImage,
  altImage = "callout",
  children,
}) {
  return (
    <CalloutStyles>
      {urlImage && (
        <PostImage className={"image-callout"} url={urlImage} alt={altImage} />
      )}
      <div className="content">
        <PostTitle size={"l"}>{title}</PostTitle>
        {children}
      </div>
    </CalloutStyles>
  );
}

Callout.propTypes = {
  title: PropTypes.string.isRequired,
  urlImage: PropTypes.string,
  altImage: PropTypes.string,
  children: PropTypes.node,
};
