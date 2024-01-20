import styled from "styled-components";
import { Post } from "@/components/post";
import PropTypes from "prop-types";

const PostCardStyles = styled.div`
  .post {
    display: flex;
    flex-direction: ${(props) =>
      props.$direction === "vertical" ? "column" : "row"};

    .infos {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
`;
export default function PostCard({
  sizeImage,
  sizeTitle,
  direction = "vertical",
}) {
  return (
    <PostCardStyles $direction={direction}>
      <Post>
        <Post.Image
          size={sizeImage}
          url={
            "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="infos">
          <Post.Tag>Tag</Post.Tag>
          <Post.Title size={sizeTitle}>
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </Post.Title>
          <Post.Info />
        </div>
      </Post>
    </PostCardStyles>
  );
}

PostCard.propTypes = {
  sizeImage: PropTypes.string,
  sizeTitle: PropTypes.string,
  direction: PropTypes.oneOf(["vertical", "horizon"]),
};
