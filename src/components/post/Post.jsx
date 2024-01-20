import styled from "styled-components";
import PropTypes from "prop-types";

const PostStyles = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${(props) =>
    props.background ? props.theme.main : "transparent"};
  border-radius: 8px;
  overflow: hidden;
  padding: ${(props) => props.padding || "0"};
`;

export default function Post({ children }) {
  return <PostStyles className={"post"}>{children}</PostStyles>;
}

Post.propTypes = {
  children: PropTypes.node,
};
