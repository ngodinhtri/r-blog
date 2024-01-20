import styled from "styled-components";
import { Post } from "@/components/post";

const FeaturePostCardStyles = styled.div`
  .post {
    position: relative;
  }

  .intro {
    position: absolute;
    inset: 0;
    padding: 20px 20px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    color: ${(props) => props.theme.highLight};

    & .top {
      display: flex;
      justify-content: space-between;
    }

    & .post-tag {
      color: ${(props) => props.theme.headLineColor};
    }

    & .post-title {
      display: inline-flex;
      color: currentColor;
    }
  }
`;
export default function FeaturePostCard() {
  return (
    <FeaturePostCardStyles>
      <Post>
        <Post.Image
          size={"l"}
          url={
            "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="intro">
          <div className="top">
            <Post.Tag>Kiến thức</Post.Tag>
            <Post.Info />
          </div>
          <Post.Title>
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </Post.Title>
        </div>
      </Post>
    </FeaturePostCardStyles>
  );
}
